# snowpack-plugin-glslify

[![NPM Package][npm]][npm-url]

[![Build Status](https://travis-ci.org/borisdiakur/snowpack-plugin-glslify.svg?branch=main)](https://travis-ci.org/borisdiakur/snowpack-plugin-glslify)
[![Coverage Status](https://coveralls.io/repos/borisdiakur/snowpack-plugin-glslify/badge.svg?branch=main)](https://coveralls.io/r/borisdiakur/snowpack-plugin-glslify?branch=main)
[![npm version](https://badge.fury.io/js/snowpack-plugin-glslify.svg)](http://badge.fury.io/js/snowpack-plugin-glslify)

Import GLSL code with [glslify](https://github.com/glslify/glslify) (a node.js-style module system for GLSL).

```js
import frag from './shaders/frag.glsl'
console.log(frag)
```

## Installation

```sh
npm install --save-dev snowpack-plugin-glslify
```
```sh
yarn add -D snowpack-plugin-glslify
```

## Usage

```js
// snowpack.config.js
import glslify from 'snowpack-plugin-glslify'

export default {
  // ...
  plugins: [
    'snowpack-plugin-glslify'
  ]
}
```

## Options

Currently, the only supported option is compress.
If you need more, shoot me a PR. 

```js
  plugins: [
    ['snowpack-plugin-glslify', { "compress": false }]
  ]
```

## License

Released under the [MIT license](LICENSE).