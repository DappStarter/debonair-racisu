require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind equip gloom entire tail genius'; 
let testAccounts = [
"0xe49c837db1d95b849d92997782d69091e60a2d565ad7160078b92768b079a5f4",
"0xdc703d46667094c58aa99a63b4dee5679ca2dd1d72a6b6da5e1508cc30d9ea15",
"0x140b588b4af26feb9aa4e57d44a33edd1c8ebb4465a620372ce357d7bee7f1a2",
"0x02b7a050eaae993cbd682e138d1bec5af50d4ef9f4738b58fd97b84db0fa6f57",
"0xb5cb679ea386dc3b9a8d904f0bd4aff9a144764cec4434829818768d1ecab1a0",
"0xd29ad4a0eac27baf875d8527f6aa8ee276f2eb0dd525a37e9b39ea03ff97069e",
"0xa79f4565e94a9b9cad2e3469dc1a4277f1bb7ff538f8256ad4e3e44fcc303335",
"0xbdfafd8047acd4fff32a45e8379e5d0bccdd2821913c3a26809d4d8052eff406",
"0x65c01e06fdee6c2ea94d29134bb1f5b5a76d78993c9d2b1e01b134cfb02f33b0",
"0xb081ce46712cd5d8587e19fdfcf2aa82d280eeadde066d7ad4d0ddc2b90985c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
