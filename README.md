## Remix-Tests-Beta

`remix-tests` is a tool to test Solidity smart contracts. It works underneath Remix IDE plugin "Solidity Unit Testing" which is used to write and run test cases for a contract. Tests are written in Solidity itself. `remix-tests` can be used as CLI too.

`Remix-tests-beta` is a repository dedicated to beta test the new additions in remix-tests before release

### Feature Description

We have added a feature which provides more insights about failed tests including `expected value`, `received value` & assertion method like `equal`, `notEqual` etc.

### Testing as a Remix IDE plugin

* Open https://remix-alpha.ethereum.org/
* Activate the `Solidity Unit Testing` plugin
* We have prepared a [GIST](https://gist.github.com/EthereumRemix/36306c729c9a2832f53d542fdb8ab843) for beta testing.
* You can quickly load it — either running `remix.loadgist('36306c729c9a2832f53d542fdb8ab843')` on remix console or click the `GIST` button in the `IMPORT` section of Remix’s `Home` tab and in the modal input the gist id: `36306c729c9a2832f53d542fdb8ab843`
* Go to the Solidity Unit Testing Plugin.
* In the the test directory field input the GIST’s folder: `browser/gists/36306c729c9a2832f53d542fdb8ab843`
* Run the test.

To know more about Remix IDE `Solidity Unit Testing Plugin`, visit [Remix IDE official documentation](https://remix-ide.readthedocs.io/en/latest/unittesting.html).

### Testing as CLI

Run these commands:
```
Clone the repo: $ git clone https://github.com/EthereumRemix/remix-tests-beta
Go to project folder: $ cd remix-tests-beta
Install dependencies: $ npm install
Setup code: $ npm run setup
```

Optionally, you can run the tests too:
```
$ export NODE_OPTIONS="--max-old-space-size=2048"
$ npm test
```

Run CLI to run the tests from a contract in `tests` directory

```
$ ./dist/bin/remix-tests <contract-file-path>
$ ./dist/bin/remix-tests tests/examples_1/simple_storage_test.sol
```

You can try it by changing the `<contract-file-path>`

## Feedback

Do let know us your feedback by filling relevant information in this form: https://forms.gle/3Ls8ESf1Q7djjGrU6

Additionlly, you can also reach us through our [Gitter Channel](https://gitter.im/ethereum/remix) in case of any queries.

## License

[MIT](LICENSE.md) © 2018-20 Remix Team
