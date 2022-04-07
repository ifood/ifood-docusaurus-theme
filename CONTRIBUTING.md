# Contributing

If you're interested in contributing to the project, hopefully, this document makes the process for contributing clear.

First of all, read our [get involved guide](https://github.com/ifood/.github/blob/main/GET_INVOLVED.md) and the [development guide](https://github.com/ifood/.github/blob/main/DEVELOPMENT.md) to understand how to contribute to this project. Also, read the [security guidelines](https://github.com/ifood/.github/blob/main/SECURITY.md) to help us to provide a safe code.

> Is very important to, before opening a pull request, assure that you read all docs, and signed the [CLA](https://github.com/ifood/clabot-config) too.


## Code of Conduct

iFood has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/ifood/.github/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Commits

This project follows the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) standards, and you must be sure that all your commits are following the pattern.

## Pull Request

All pull requests must be opened to the `main` branch.

## Project development

### Required

- [Node](https://nodejs.org/en/download/) >= 16.14.0

### Installing the dependencies

At first, install the dependencies in root directory.
```bash
yarn 
```

Then install the dependencies of the example.
```bash
cd example
yarn
```

### Initializing the development environment

At the root of project run the watch script.
```bash
yarn watch
```

In another terminal tab, initialize the example.

```bash
cd example
yarn start
```