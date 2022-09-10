require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pull gesture drop sugar season'; 
let testAccounts = [
"0x3a9c40a20ca75558626249a35187338acf18879a075f253773ebaa6fe594f194",
"0xa057b61bfaf724f19ed87a814d2bdd0222e4573a3626563d99543be7ee7261ce",
"0x64123dae54eced3b6e92b85284cdcb16c508e013feb34a5f77a2b3e5c3d79504",
"0x02362c2896033dae2bba2731b7f73e9d9278cc9c9ef7b88f17109a825cc1d1b7",
"0x405cef7b233a9b8eb1339099625bc3f01c51916786eb6ffe089b3d7ef4267518",
"0x2add618a5db99e82f8766ae2c192505e38460c0e232e45aef09058d17e3388b2",
"0x4efa7804b4eb9e309e565f8fd9d37b090ce7671a0650a8317289e5e60bc29490",
"0x88cfe8d681ea4bde79042b0e8a80ab9e0c26c207e96ec35b0c862b70f309faaa",
"0x74dc259d8a389ac5bdc44f7c58ff1b381afbedfa9290acdaa286e2d999545d96",
"0xffae68226195d83c476381b9ec70f43f1bfb704bb9a300af2136283e7df272f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

