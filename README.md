# Kickstater Contract

## Setup


at the root directory, you have to create a '.env' file  with your Ethereum [INFURA API](https://infura.io/) url:
```
INFURA_URL="https://rinkeby.infura.io/v3/..."
```
Create a '.secret' file containing your ethereum wallet mnemonic (12 words, from metamask):
```
pistol cat dog etc...
```

Install the dependency:

```shell
$ npm install
```
You need Truffle installed:
```shell
$ npm install -g truffle@5.0.21
```
Then compile the contracts:
```shell
$ truffle compile
```
Then deploy you contract on the ethereum test network of your choice (configs on the 'truffle-config.js'):
```sheel
$ truffle migrate --network=rinkeby
```
Finallyse your '.env' file by adding your deployed contract address:
```
FACTORY_CONTRACT_ADDRESS="0x8..."
```
Congratulation, your decentralized kickstartup is running on http://localhost:3000 🎉

## Tests
Run the unit tests (You need [Ganache installed](https://www.trufflesuite.com/docs/ganache/quickstart) ):
```shell
$ truffle test ./test/Campaign.test.js
```

## Useful links
- [Truffle Documentation](https://www.trufflesuite.com/docs/truffle/quickstart)