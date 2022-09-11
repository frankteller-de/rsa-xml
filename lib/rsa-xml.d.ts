type RSAXMLPrivateKey = {
    n: Buffer;
    e: number;
    d: Buffer;
    p: Buffer;
    q: Buffer;
    dmp1: Buffer;
    dmq1: Buffer;
    coeff: Buffer;
};

declare class RSAXML {
    /**
     * @param key Make sure to specify a container name as well if you're providing key
     */
    constructor(key?: string, container: ?string);
    importKey(key: string, container?: string): void;
    /**
     * Exports private key in pem format from an xml file containing it
     * @param key key in xml format
     */
    exportPemKey(key: string): string;
    /**
     * Converts an `RSAXMLPrivateKey` to `pem` format
     *
     * If you have a plain xml file, you can use {@link RSAXML.exportPemKey exportPemKey} instead
     * @param xmlKey
     */
    convertXMLKeyToPem(xmlKey: RSAXMLPrivateKey): string;
    /**
     *
     * @param value Encrypted Data
     * @param container Private key container. *Default container:* `default`
     * @param encoding Encrypted value encoding (if it's not a Buffer). *Default container:* `base64`
     */
    decrypt(
        value: string | Buffer,
        container?: string,
        encoding?: string
    ): string;
    private _parseXMLKey(key: string): RSAXMLPrivateKey;
    private linebrk(str: string, maxLen: string);
}

/**
 * @param key Make sure to specify a container name as well if you're providing key
 */
export function buildRSAXML(key?: string, container: ?string): RSAXML;
