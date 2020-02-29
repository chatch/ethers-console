# ethers-console

[![NPM Package](https://img.shields.io/npm/v/ethers-console.svg?style=flat-square)](https://www.npmjs.org/package/ethers-console)

An Ethereum console using ethers.js.

For now just sets up handles for each network using an Infura Provider for a quick start.

## Usage

```
> ethers-console
eth> mainnet.getTransactionReceipt('0x1234....')
eth> kovan.getBlockNumber().then(num=>console.log(num))
eth> local.getNetwork().then(num=>console.log(num))
```

Shortcuts:
```
eth> m    // mainnet
eth> k    // kovan
eth> r    // rinkeby
eth> ro   // ropsten
eth> l    // local   - localhost:8545 (JsonRpcProvider)
eth> g    // ganache - localhost:7545 (JsonRpcProvider)
```

## Setup

```
> npm i -g ethers-console
> cat > ~/.ethers-console.env
INFURA_PROJECT_ID=<your infura.io project id>
^D
```

## Todo

* Signers - add private keys to ~/.ethers-console.env
