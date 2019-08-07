# template-typescript

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing TypeScript projects.

This project provides basic scaffolding for developing and building TypeScript libraries.

## Overview

### Develop

This command builds the project in watch mode. The source (i.e. entry) is in `src`, which is outputted in the designated folder `lib`.

The destination folder can be changed through the `outDir` value in `tsconfig.json`.

```bash
yarn develop
```

### Build

This command removes the `lib` folder and builds the project.

```bash
yarn build
```

### Test

This command runs tests located in the `tests` folder.

```bash
yarn test
```

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## Continuous Integration

This template uses `Travis CI` to build and test remote changes.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-typescript.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-typescript
[codecov]: https://codecov.io/gh/metonym/template-typescript
[codecov-shield]: https://codecov.io/gh/metonym/template-typescript/branch/master/graph/badge.svg
