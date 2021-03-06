## grunt-byte-order-mark
[![Build Status](https://api.travis-ci.org/bergquist/grunt-byte-order-mark.png)](https://travis-ci.org/bergquist/grunt-byte-order-mark) [![NPM version](https://badge.fury.io/js/grunt-byte-order-mark.png)](https://npmjs.org/package/grunt-byte-order-mark)
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
  addBom: {
    src: 'file-wihtout-bom.txt',
    options: {
      add: true
    }
  },
  removeBom: {
    src: 'file-wiht-bom.txt',
    options: {
      remove: true
    }
  }
}
```

Lets go dancing!

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).