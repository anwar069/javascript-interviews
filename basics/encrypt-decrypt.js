export function Encrypt(data, key) {
    let encryptout = '';
    for (let index = 0; index < data.length; index++) {
        let char = data[index]
        let code = char.charCodeAt();
        encryptout += String.fromCharCode(code + key);

    }
    return encryptout;
}

export function Decrypt(data, key) {
    let decryptout = '';
    for (let index = 0; index < data.length; index++) {
        let char = data[index]
        let code = char.charCodeAt();
        decryptout += String.fromCharCode(code - key);

    }
    return decryptout;
}