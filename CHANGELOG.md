# Changelog

## v3.0.0 - 2022-09-25

### Added

- Added property path support for comparing nested objects.
- Added `propsEqual` for comparing if all properties are equal.

### Changed

- Replaced [curry](https://www.npmjs.com/package/curry) with dependency with internal function.

### Removed

- **BREAKING** Removed single property support from `propsChanged`.
- **BREAKING** Removed `propsChanged` as default export.

## 2.2.0 - 2021-04-20

### Added

- Added ES Module build.
- Added source maps to build output.

### Changed

- Enabled loose mode on '@babel/preset-env' to reduce build output.

## 2.1.1 - 2021-04-20

### Added

- Set `"sideEffects": false` in [package.json](./package.json).

### Changed

- Updated devDependencies.

## 2.1.0 - 2020-04-27

### Changed

- Replaced [arrify](https://www.npmjs.com/package/arrify) dependency with internal function.
- Updated devDependencies.

## 2.0.0 - 2019-06-20

### Changed

- **BREAKING** Use [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) for SameValue equality comparison.
- Builds are now done with [Rollup](http://rollupjs.org).
- Updated devDependencies.

## 1.1.1 - 2018-10-19

### Changed

- Updated devDependencies.

## 1.1.0 - 2018-03-11

### Added

- Added build script using [babel-cli](https://www.npmjs.com/package/babel-cli).
- Added support for automatic currying with [curry](https://www.npmjs.com/package/curry).

### Changed

- Refactored internals in modern JavaScript.
- Updated devDependencies.
- Updated `propNames` parameter to allow a string for a single prop name.

## 1.0.0 - 2017-04-28

### Added

Initial public version! :tada:
