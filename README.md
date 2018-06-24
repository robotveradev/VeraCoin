# Vera Coin
[![Build Status](https://travis-ci.org/robotveradev/VeraCoin.svg?branch=master)](https://travis-ci.org/robotveradev/VeraCoin)

Vera Coin is ERC-20 compatible Ethereum token deployed at [0xf90f1648926005A8bb3ed8ec883164De7F768743](https://etherscan.io/address/0xf90f1648926005A8bb3ed8ec883164De7F768743)  

## Token contract

VeraCoin is [ERC-20](https://github.com/ethereum/EIPs/issues/20) standard token with the following paramaters:

- Name: **VeraCoin**
- Symbol: **Vera**
- Decimals: **18**
- TotalSupply: **15700000.000000000000000000**
- InitialSupply: **15700000.000000000000000000** (equals to totalSupply)
- Mintable: **No**, pre-issued
- Burnable: **No**, burn can be emulated by sending tokens to 0x0 address
- Source Code: **[VeraCoin.sol](contracts/VeraCoin.sol)**
- Mainnet address: **[0xf90f1648926005A8bb3ed8ec883164De7F768743](https://etherscan.io/address/0xf90f1648926005A8bb3ed8ec883164De7F768743)**

## Getting started
### Get the source code
Clone the contracts repository with submodules (we use zeppelin-solidity libraries)
```
git clone git@github.com:robotveradev/VeraCoin.git
```

### Test it

Install node-js globally following official [nodeJS manual](https://nodejs.org/en/download/package-manager/).

Then cd to the project directory and install requirements with npm and run tests.

```
cd VeraCoin
npm install
npm run test
```
Test script will download Solidity 0.4.12 and run token tests.

## Authors
* OnGrid Systems: [Site](https://ongrid.pro), [GitHub](https://github.com/OnGridSystems/)