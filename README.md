grunt-contrib-bom [![Build Status](https://api.travis-ci.org/bergquist/grunt-byte-order-mark.png)](https://travis-ci.org/bergquist/grunt-byte-order-mark) [![NPM version](https://badge.fury.io/js/grunt-byte-order-mark.png)](https://npmjs.org/package/grunt-byte-order-mark)
=================

Grunt task to strip or add BOM to files

```shell
npm install grunt-byte-order-mark --save-dev
```

```js
grunt.loadNpmTasks('grunt-byte-order-mark');
```

```js
bom: {
  src: '*.txt',
  options: {
    add: true, //you can only choose one.
    remove: true
  }
}
```

Lets go dancing!