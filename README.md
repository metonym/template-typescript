# template-typescript

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing TypeScript projects.

This project provides basic scaffolding for developing and building TypeScript libraries.

## Getting Started

Clone the template:

```bash
git clone git@github.com:metonym/template-typescript.git
cd template-typescript
```

Install its dependencies:

```bash
yarn install
```

## Available Scripts

### `yarn test:tdd`

Runs the project in development mode and watches for any changes.

### `yarn build`

Builds the project for production. The build directory is `dist`; types will be written to `dist/index.d.ts`. Customize the build directory in the `outDir` configuration option in the [tsconfig.json](tsconfig.json).

### `yarn test`

Runs test suites and generates a coverage report.

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## Continuous Integration

This template uses `Travis CI` to build and test remote changes.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-typescript.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-typescript
[codecov]: https://codecov.io/gh/metonym/template-typescript
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-typescript.svg
