const crypto = require('crypto');

let decrypting = function (plaintext, password) {
    const decipher = crypto.createDecipher('aes192', password);
    const encrypted = plaintext;

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return(decrypted);
};

module.exports=decrypting;