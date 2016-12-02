## uxcore-transfer-form-field

React transfer form field

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-transfer-form-field.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-transfer-form-field
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-transfer-form-field.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-transfer-form-field
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-transfer-form-field.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-transfer-form-field?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-transfer-form-field.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-transfer-form-field
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-transfer-form-field.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-transfer-form-field#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-transfer-form-field.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-transfer-form-field.svg
[sauce-url]: https://saucelabs.com/u/uxcore-transfer-form-field


### Development

```sh
git clone https://github.com/uxcore/uxcore-transfer-form-field
cd uxcore-transfer-form-field
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-transfer-form-field
cd uxcore-transfer-form-field
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/transfer-form-field

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

|参数|类型|必需|默认值|说明|
|---|----|---|----|---|
|height|number|optional|220|transfer高度|
|disabled|boolean|optional|false|是否启用 disable 模式|
|showSearch|boolean|optional|true|是否显示搜索条|
|searchPlaceholder|string|optional|定位输入内容||
|leftTitle|string|optional|'未选中的'|左侧标题|
|rightTitle|string|optional|'已选中的'|右侧标题|

* more props: [FormField](http://uxcore.coding.me/components/form/#formfield-专属配置)

