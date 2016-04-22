var ber       = require('asn1').Ber,
    constants = require('constants'),
    crypto    = require('crypto');

var _cache = {};

function RSAXML (key, container) {
    if (typeof key !== 'undefined') {
        this.importKey(key, container);
    }
    this.defaultContainer = 'default';
    return this;
}

RSAXML.prototype.importKey = function (key, container) {
    var self = this;

    // check the key type
    if (typeof key !== 'string') {
        throw Error('Unsupported key type. Key must be a string.');
    }
    
    // set container name
    container = container || self.defaultContainer;

    // check the container type
    if (typeof container !== 'string') {
        throw Error('Unsupported container type. Container must be a string.');
    }

    // cache the key by container name
    _cache[container] = self.exportPemKey(key);
};

RSAXML.prototype.exportPemKey = function (key) {
    if (typeof key === 'string' && key.startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
        return key.replace(/\\n/g, '');
    }
    return this.convertXMLKeyToPem(this._parseXMLKey(key));
};

RSAXML.prototype.convertXMLKeyToPem = function (xmlKey) {
    var self = this;

    // calc buffer size
    var length = 512;
    for (var key in xmlKey) {
        if (typeof xmlKey[key] === 'object')
            length += xmlKey[key].length;
    }

    // create writer
    var writer = new ber.Writer({size: length});

    writer.startSequence();
    writer.writeInt(0);
    writer.writeBuffer(xmlKey.n, 2);
    writer.writeInt(xmlKey.e);
    writer.writeBuffer(xmlKey.d, 2);
    writer.writeBuffer(xmlKey.p, 2);
    writer.writeBuffer(xmlKey.q, 2);
    writer.writeBuffer(xmlKey.dmp1, 2);
    writer.writeBuffer(xmlKey.dmq1, 2);
    writer.writeBuffer(xmlKey.coeff, 2);
    writer.endSequence();

    // create and return pem cert
    return '-----BEGIN RSA PRIVATE KEY-----\n' + self.linebrk(writer.buffer.toString('base64'), 64) + '\n-----END RSA PRIVATE KEY-----';
};

RSAXML.prototype.decrypt = function (value, container, encoding) {
    var self = this;

    // set container name
    container = container || self.defaultContainer;
    useEncode = encoding || 'base64';

    if (!(container in _cache)) {
        throw Error('Key not found! Please use .importKey first.');
    }
    if (!_cache[container].startsWith('-----BEGIN RSA PRIVATE KEY-----')) {
        throw Error('Key not found! Please use .importKey first.');
    }

    var options = { 
        key: _cache[container], 
        padding: constants.RSA_PKCS1_PADDING
    };
    var encrypted = Buffer.isBuffer(value) ? value : new Buffer(value, useEncode);
    var decrypted = crypto.privateDecrypt(options, encrypted);
    return decrypted.toString('utf8');
};

RSAXML.prototype.linebrk = function(str, maxLen) {
    var out = '';
    var i = 0;
    // make linebreak after n signs
    while (i + maxLen < str.length) {
        out += str.substring(i, i + maxLen) + '\n';
        i += maxLen;
    }
    return out + str.substring(i, str.length);
};

RSAXML.prototype._parseXMLKey = function (key) {
    var encXMLKey = key;
    var encoding  = 'base64';

    // decode key if xml key is base64 encoded
    if (!encXMLKey.startsWith('<'))
        encXMLKey = new Buffer(key, encoding).toString('utf8');

    // TODO: check value syntax
    return {
        n: new Buffer(encXMLKey.match(/<Modulus>([^<].*)<\/Modulus>/)[1], encoding),
        e: 65537,
        d: new Buffer(encXMLKey.match(/<D>([^<].*)<\/D>/)[1], encoding),
        p: new Buffer(encXMLKey.match(/<P>([^<].*)<\/P>/)[1], encoding),
        q: new Buffer(encXMLKey.match(/<Q>([^<].*)<\/Q>/)[1], encoding),
        dmp1:   new Buffer(encXMLKey.match(/<DP>([^<].*)<\/DP>/)[1], encoding),
        dmq1:   new Buffer(encXMLKey.match(/<DQ>([^<].*)<\/DQ>/)[1], encoding),
        coeff:  new Buffer(encXMLKey.match(/<InverseQ>([^<].*)<\/InverseQ>/)[1], encoding)
    };
};

/**
 * Module exports
 */

module.exports = function(key, container) {
    return new RSAXML(key, container);
};