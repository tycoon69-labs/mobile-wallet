# T69 Mobile

<p align="center">
    <img src="./banner.png" />
</p>

> A Wallet for Everyone

[![Build Status](https://badgen.now.sh/circleci/github/ArkEcosystem/mobile-wallet)](https://circleci.com/gh/ArkEcosystem/mobile-wallet)
[![Codecov](https://badgen.now.sh/codecov/c/github/arkecosystem/mobile-wallet)](https://codecov.io/gh/arkecosystem/mobile-wallet)
[![Latest Version](https://badgen.now.sh/github/release/ArkEcosystem/mobile-wallet)](https://github.com/ArkEcosystem/mobile-wallet/releases/latest)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Lead Maintainer: [Lúcio Rubens](https://github.com/luciorubeens)

ARK’s mobile wallet is a hybrid application (using the same codebase for Android and iOS which helps with coordinated development). Created using Ionic framework and ARK’s [TypeScript API](https://github.com/ArkEcosystem/ark-ts) to interact with the ARK network via your mobile phone, anytime, anywhere (as long as you have an internet connection).

## Download

- [Google Play](https://play.google.com/store/apps/details?id=io.ark.wallet.mobile)
- [App Store](https://itunes.apple.com/us/app/mobile-ark/id1324625967)

## Features

- Import your existing passphrase (import by QR Scanner or write/paste your passphrase).
- Generate a new passphrase.
- Encrypt access to your profile with a custom 6 digit PIN (AES256+PBKDF2).
- Most transaction types are available: send, receive, vote, unvote, register a delegate.
- Connects to both mainnet and devnet.
- Option for additional profiles (separate profiles for different ARK addresses or networks).
- Option to add contacts and easily transact with them.
- Total balance of your combined ARK addresses.
- Wallet backup - input your selected PIN to decrypt your wallet and gain view of your private data.
- Change PIN - if you want to change your encryption/decryption PIN you can easily do so.
- Clear Data - you can clear all your data from the phone.
- Overview of network status with an option to change peer.
- Current market value, along with weekly movements.
- Support for showing data in different FIAT currencies.

## Build

First follow the steps below to install the dependencies:

```bash
$ npm install -g ionic cordova@7.1.0
$ npm install
$ ionic cordova prepare
```

Run on device:

```bash
$ ionic cordova run ios
$ ionic cordova run android
```

Debug in browser:

```bash
$ npm run ionic:serve
```

## Testing

To run the unit tests:
```bash
$ npm test
```

To run the unit tests and watch them:
```bash
$ npm run test:unit
```

To run the unit tests and generate a coverage report:
```bash
$ npm run test:coverage
```

To run the E2E (end to end) tests:
```bash
$ npm run test:e2e
```

## Contributing

- If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
- Engage with other users and developers on [ARK Slack](https://ark.io/slack/).
- Join to our [gitter](https://gitter.im/ark-developers/Lobby).
- [Contribution bounties](https://docs.ark.io/guidebook/contribution-guidelines/contributing.html).
- [Help translate](./TRANSLATING.md).

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [Tycoonchain](https://ark.io)
