# RSA XML Decrypter

[![NPM](https://nodei.co/npm/rsa-xml.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/rsa-xml/)

RSA XML Decrypter for Node.
Decrypt a string by private RSA XML C# key in Node.js.

## Simple Example

Single key decryption with base64 encoded key.

```javascript
var RSAXML = require('rsa-xml'),

// base64 encoded private rsa xml key
var privateKey = 'PFJTQUtleVZhbHVlPjxNb2R1bHVzPjUxbCtyaHRzRmQvQ3NOb0U5VW9kdWorS0Vqd0F2YWZUZmI1N3Zldit3b3ZRbjdoVURrdzlCbVVMOTdSSC9zaC9udVN2Qkl3RGRlVVZTZzJDaXo4bE5McmY0WTVlMmI1NUtNZVBzR3lIV29abXhpbkdQUzd1cjRLSkhPZmVCYStHeGRDOC80cFdCSjZFK3BCajNkQ2JQRFBLWVZ6N0RRTUhkWGNRWjRCcTR2OD08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjxQPitRdkdsTE14anZMaHJFZi9ab011VklBR05xMXh6YUptcGZCa2E0dDNsY0RZR2xoUVI1OXZzWWFORGwzVTQzaVVZZ3JYa0NtbFVnRXB5QXBUS05hL3RRPT08L1A+PFE+N2M4NDNFZXRrM0pqeEFRRDFKUGg0QzFONkNyeCtkWDVjSXk1Z2xkY2Q3ODlYenJFU2dTUDhEWDd5U2puT2VXZmxEdmlyR0h6YVNXdmZWaTNKNXZBWXc9PTwvUT48RFA+T1JEYXN1NFFtQW5OYmpXZEx6YzE0WVRvWjVUOHM3clh2SVJGN21LcHh6WEdEdHRYb2VIRnJTOEFtVjhremU2dVNYemtnaE1ZMzU2R25XRElSMTVWMVE9PTwvRFA+PERRPkh5VC9kbUh3eXBtMWxTdE5jUjY0KzBvVHBPOVM1M3h0Z1o3OGdLUitXTFIwRGkrOUcxQ0RwVnI4a2JqSXA1MTZDOGpZQSttRUhtWXdHSU53NFVBVnJ3PT08L0RRPjxJbnZlcnNlUT5SVXowVDA4eDZSaHg4U2RMQ2dQVXNNenJKb29qQjZDTmR2MkpOcHNaN2Nnc1k1MDhEQjAwd29kQlFrem90SGJ0QVhTa1VsN2d0QXI0TGlFejVORU56Zz09PC9JbnZlcnNlUT48RD5JVmVPRmluMTZyUjIwREIrVjNCVGxzODlKeGRHWkxtbWF0c1prQXZPTkhGSERoc3RqaFAzRlpBRVBnZXUrcGdnZ0hZUDNVQVA2RWdDODBzUzB6TzB1T2h0UGIzNDllOSs2WnhlMjJhaWV0WTFabFlQT201di9YbE5HZlhOZWQvbjhUYUJZRHB3YnZTVUw0T2M1eFJOeWFnU2x4Mi9GN1h3NHBkQmw0cG9LZ1U9PC9EPjwvUlNBS2V5VmFsdWU+';
var encBase64  = '4TkhLlVNK27LQXSRIftGCbwOI2qnBGD0eR61g53KAdw5J+BTpczLpdWGn/9v3I6xGPQYvTB1F2cmbcuBboNGa18b+8gigwbat9vTEuLjD/OKl2V+jpqKf3xxwYYuz1s05HyV8KWxbS01M/iwjWPrcNRWh3vWff9pRAu8Z6KQAQc=';

var rsa = new RSAXML();
rsa.importKey(privateKey);
var decrypted = rsa.decrypt(encBase64);

// output: Hello World!
console.log('decrypted:', decrypted);
```

Single key decryption with plain text xml key.

```javascript
var RSAXML = require('rsa-xml'),

// plain text rsa xml key
var privateKey = '<RSAKeyValue><Modulus>51l+rhtsFd/CsNoE9Uoduj+KEjwAvafTfb57vev+wovQn7hUDkw9BmUL97RH/sh/nuSvBIwDdeUVSg2Ciz8lNLrf4Y5e2b55KMePsGyHWoZmxinGPS7ur4KJHOfeBa+GxdC8/4pWBJ6E+pBj3dCbPDPKYVz7DQMHdXcQZ4Bq4v8=</Modulus><Exponent>AQAB</Exponent><P>+QvGlLMxjvLhrEf/ZoMuVIAGNq1xzaJmpfBka4t3lcDYGlhQR59vsYaNDl3U43iUYgrXkCmlUgEpyApTKNa/tQ==</P><Q>7c843Eetk3JjxAQD1JPh4C1N6Crx+dX5cIy5gldcd789XzrESgSP8DX7ySjnOeWflDvirGHzaSWvfVi3J5vAYw==</Q><DP>ORDasu4QmAnNbjWdLzc14YToZ5T8s7rXvIRF7mKpxzXGDttXoeHFrS8AmV8kze6uSXzkghMY356GnWDIR15V1Q==</DP><DQ>HyT/dmHwypm1lStNcR64+0oTpO9S53xtgZ78gKR+WLR0Di+9G1CDpVr8kbjIp516C8jYA+mEHmYwGINw4UAVrw==</DQ><InverseQ>RUz0T08x6Rhx8SdLCgPUsMzrJoojB6CNdv2JNpsZ7cgsY508DB00wodBQkzotHbtAXSkUl7gtAr4LiEz5NENzg==</InverseQ><D>IVeOFin16rR20DB+V3BTls89JxdGZLmmatsZkAvONHFHDhstjhP3FZAEPgeu+pgggHYP3UAP6EgC80sS0zO0uOhtPb349e9+6Zxe22aietY1ZlYPOm5v/XlNGfXNed/n8TaBYDpwbvSUL4Oc5xRNyagSlx2/F7Xw4pdBl4poKgU=</D></RSAKeyValue>';
var encBase64  = '4TkhLlVNK27LQXSRIftGCbwOI2qnBGD0eR61g53KAdw5J+BTpczLpdWGn/9v3I6xGPQYvTB1F2cmbcuBboNGa18b+8gigwbat9vTEuLjD/OKl2V+jpqKf3xxwYYuz1s05HyV8KWxbS01M/iwjWPrcNRWh3vWff9pRAu8Z6KQAQc=';

var rsa = new RSAXML();
rsa.importKey(privateKey);
var decrypted = rsa.decrypt(encBase64);

// output: Hello World!
console.log('decrypted:', decrypted);
```

Single key decryption with PEM xml key.

```javascript
var RSAXML = require('rsa-xml'),

// plain text rsa xml key
var privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
                'MIICWAIBAAKBgOdZfq4bbBXfwrDaBPVKHbo/ihI8AL2n032+e73r/sKL0J+4VA5M\n'+
                'PQZlC/e0R/7If57krwSMA3XlFUoNgos/JTS63+GOXtm+eSjHj7Bsh1qGZsYpxj0u\n'+
                '7q+CiRzn3gWvhsXQvP+KVgSehPqQY93QmzwzymFc+w0DB3V3EGeAauL/AgMBAAEC\n'+
                'gYAhV44WKfXqtHbQMH5XcFOWzz0nF0ZkuaZq2xmQC840cUcOGy2OE/cVkAQ+B676\n'+
                'mCCAdg/dQA/oSALzSxLTM7S46G09vfj1737pnF7bZqJ61jVmVg86bm/9eU0Z9c15\n'+
                '3+fxNoFgOnBu9JQvg5znFE3JqBKXHb8XtfDil0GXimgqBQJA+QvGlLMxjvLhrEf/\n'+
                'ZoMuVIAGNq1xzaJmpfBka4t3lcDYGlhQR59vsYaNDl3U43iUYgrXkCmlUgEpyApT\n'+
                'KNa/tQJA7c843Eetk3JjxAQD1JPh4C1N6Crx+dX5cIy5gldcd789XzrESgSP8DX7\n'+
                'ySjnOeWflDvirGHzaSWvfVi3J5vAYwJAORDasu4QmAnNbjWdLzc14YToZ5T8s7rX\n'+
                'vIRF7mKpxzXGDttXoeHFrS8AmV8kze6uSXzkghMY356GnWDIR15V1QJAHyT/dmHw\n'+
                'ypm1lStNcR64+0oTpO9S53xtgZ78gKR+WLR0Di+9G1CDpVr8kbjIp516C8jYA+mE\n'+
                'HmYwGINw4UAVrwJARUz0T08x6Rhx8SdLCgPUsMzrJoojB6CNdv2JNpsZ7cgsY508\n'+
                'DB00wodBQkzotHbtAXSkUl7gtAr4LiEz5NENzg==\n'+
                '-----END RSA PRIVATE KEY-----';
var encBase64  = '4TkhLlVNK27LQXSRIftGCbwOI2qnBGD0eR61g53KAdw5J+BTpczLpdWGn/9v3I6xGPQYvTB1F2cmbcuBboNGa18b+8gigwbat9vTEuLjD/OKl2V+jpqKf3xxwYYuz1s05HyV8KWxbS01M/iwjWPrcNRWh3vWff9pRAu8Z6KQAQc=';

var rsa = new RSAXML();
rsa.importKey(privateKey);
var decrypted = rsa.decrypt(encBase64);

// output: Hello World!
console.log('decrypted:', decrypted);
```

## Container Example

```javascript
var RSAXML = require('rsa-xml'),

// base64 encoded private rsa xml key
var privateKey1 = 'PFJTQUtleVZhbHVlPjxNb2R1bHVzPjUxbCtyaHRzRmQvQ3NOb0U5VW9kdWorS0Vqd0F2YWZUZmI1N3Zldit3b3ZRbjdoVURrdzlCbVVMOTdSSC9zaC9udVN2Qkl3RGRlVVZTZzJDaXo4bE5McmY0WTVlMmI1NUtNZVBzR3lIV29abXhpbkdQUzd1cjRLSkhPZmVCYStHeGRDOC80cFdCSjZFK3BCajNkQ2JQRFBLWVZ6N0RRTUhkWGNRWjRCcTR2OD08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjxQPitRdkdsTE14anZMaHJFZi9ab011VklBR05xMXh6YUptcGZCa2E0dDNsY0RZR2xoUVI1OXZzWWFORGwzVTQzaVVZZ3JYa0NtbFVnRXB5QXBUS05hL3RRPT08L1A+PFE+N2M4NDNFZXRrM0pqeEFRRDFKUGg0QzFONkNyeCtkWDVjSXk1Z2xkY2Q3ODlYenJFU2dTUDhEWDd5U2puT2VXZmxEdmlyR0h6YVNXdmZWaTNKNXZBWXc9PTwvUT48RFA+T1JEYXN1NFFtQW5OYmpXZEx6YzE0WVRvWjVUOHM3clh2SVJGN21LcHh6WEdEdHRYb2VIRnJTOEFtVjhremU2dVNYemtnaE1ZMzU2R25XRElSMTVWMVE9PTwvRFA+PERRPkh5VC9kbUh3eXBtMWxTdE5jUjY0KzBvVHBPOVM1M3h0Z1o3OGdLUitXTFIwRGkrOUcxQ0RwVnI4a2JqSXA1MTZDOGpZQSttRUhtWXdHSU53NFVBVnJ3PT08L0RRPjxJbnZlcnNlUT5SVXowVDA4eDZSaHg4U2RMQ2dQVXNNenJKb29qQjZDTmR2MkpOcHNaN2Nnc1k1MDhEQjAwd29kQlFrem90SGJ0QVhTa1VsN2d0QXI0TGlFejVORU56Zz09PC9JbnZlcnNlUT48RD5JVmVPRmluMTZyUjIwREIrVjNCVGxzODlKeGRHWkxtbWF0c1prQXZPTkhGSERoc3RqaFAzRlpBRVBnZXUrcGdnZ0hZUDNVQVA2RWdDODBzUzB6TzB1T2h0UGIzNDllOSs2WnhlMjJhaWV0WTFabFlQT201di9YbE5HZlhOZWQvbjhUYUJZRHB3YnZTVUw0T2M1eFJOeWFnU2x4Mi9GN1h3NHBkQmw0cG9LZ1U9PC9EPjwvUlNBS2V5VmFsdWU+';
var encBase64_1 = '4TkhLlVNK27LQXSRIftGCbwOI2qnBGD0eR61g53KAdw5J+BTpczLpdWGn/9v3I6xGPQYvTB1F2cmbcuBboNGa18b+8gigwbat9vTEuLjD/OKl2V+jpqKf3xxwYYuz1s05HyV8KWxbS01M/iwjWPrcNRWh3vWff9pRAu8Z6KQAQc=';
var privateKey2 = 'PFJTQUtleVZhbHVlPjxNb2R1bHVzPjUxbCtyaHRzRmQvQ3NOb0U5VW9kdWorS0Vqd0F2YWZUZmI1N3Zldit3b3ZRbjdoVURrdzlCbVVMOTdSSC9zaC9udVN2Qkl3RGRlVVZTZzJDaXo4bE5McmY0WTVlMmI1NUtNZVBzR3lIV29abXhpbkdQUzd1cjRLSkhPZmVCYStHeGRDOC80cFdCSjZFK3BCajNkQ2JQRFBLWVZ6N0RRTUhkWGNRWjRCcTR2OD08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjxQPitRdkdsTE14anZMaHJFZi9ab011VklBR05xMXh6YUptcGZCa2E0dDNsY0RZR2xoUVI1OXZzWWFORGwzVTQzaVVZZ3JYa0NtbFVnRXB5QXBUS05hL3RRPT08L1A+PFE+N2M4NDNFZXRrM0pqeEFRRDFKUGg0QzFONkNyeCtkWDVjSXk1Z2xkY2Q3ODlYenJFU2dTUDhEWDd5U2puT2VXZmxEdmlyR0h6YVNXdmZWaTNKNXZBWXc9PTwvUT48RFA+T1JEYXN1NFFtQW5OYmpXZEx6YzE0WVRvWjVUOHM3clh2SVJGN21LcHh6WEdEdHRYb2VIRnJTOEFtVjhremU2dVNYemtnaE1ZMzU2R25XRElSMTVWMVE9PTwvRFA+PERRPkh5VC9kbUh3eXBtMWxTdE5jUjY0KzBvVHBPOVM1M3h0Z1o3OGdLUitXTFIwRGkrOUcxQ0RwVnI4a2JqSXA1MTZDOGpZQSttRUhtWXdHSU53NFVBVnJ3PT08L0RRPjxJbnZlcnNlUT5SVXowVDA4eDZSaHg4U2RMQ2dQVXNNenJKb29qQjZDTmR2MkpOcHNaN2Nnc1k1MDhEQjAwd29kQlFrem90SGJ0QVhTa1VsN2d0QXI0TGlFejVORU56Zz09PC9JbnZlcnNlUT48RD5JVmVPRmluMTZyUjIwREIrVjNCVGxzODlKeGRHWkxtbWF0c1prQXZPTkhGSERoc3RqaFAzRlpBRVBnZXUrcGdnZ0hZUDNVQVA2RWdDODBzUzB6TzB1T2h0UGIzNDllOSs2WnhlMjJhaWV0WTFabFlQT201di9YbE5HZlhOZWQvbjhUYUJZRHB3YnZTVUw0T2M1eFJOeWFnU2x4Mi9GN1h3NHBkQmw0cG9LZ1U9PC9EPjwvUlNBS2V5VmFsdWU+';
var encBase64_2 = '4TkhLlVNK27LQXSRIftGCbwOI2qnBGD0eR61g53KAdw5J+BTpczLpdWGn/9v3I6xGPQYvTB1F2cmbcuBboNGa18b+8gigwbat9vTEuLjD/OKl2V+jpqKf3xxwYYuz1s05HyV8KWxbS01M/iwjWPrcNRWh3vWff9pRAu8Z6KQAQc=';

var rsa = new RSAXML();
// a private key
rsa.importKey(privateKey1, 'pKey1');
var decrypted1 = rsa.decrypt(encBase64_1, 'pKey1');
console.log('decrypted:', decrypted1);

// another private key
rsa.importKey(privateKey2, 'pKey2');
var decrypted2 = rsa.decrypt(encBase64_2, 'pKey2');
console.log('decrypted:', decrypted2);
```

## Install
```bash
npm install rsa-xml --save
```

## API

### RSAXML([key, [container]])
Create an empty RSAXML Object or import a key with optional key and container parameter.

### importKey(key, [container])
Import a private RSA XML key as plain text string, base64 encoded string or in PEM format. The optinal parameter `container` can handle different key decryptions.  

### decrypt(value, [container], [encoding])
Decrypt any value by match the key. `value` must be in base64 or buffer format.
