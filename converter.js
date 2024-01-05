const crypto = require('crypto');
const bech32 = require('bech32');

function pubKeyToValcons(pubkey, prefix) {
    const consensusPubkeyBytes = Buffer.from(pubkey, 'base64');
    const sha256Hash = crypto.createHash('sha256').update(consensusPubkeyBytes).digest();
    const addressBytes = sha256Hash.slice(0, 20);
    const valconsAddress = bech32.bech32.encode(prefix + 'valcons', bech32.bech32.toWords(addressBytes));
    return valconsAddress;
}

const result = pubKeyToValcons('', '');
console.log(result);


