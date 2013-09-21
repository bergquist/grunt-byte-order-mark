'use strict';

var grunt = require('grunt');

function check(path) {
  var expected = grunt.file.exists(path);
  var buf = grunt.file.read(path)

  return (buf[0] !== 0xEF && buf[1] !== 0xBE && buf[2] !== 0xBB)
}

exports.remove = {
  removeBOM: function(test) {
    test.expect(1);

    //check('tmp/remove/with-bom') ? test.done() : test.fail()
    //check('tmp/remove/without-bom') ? test.done() : test.fail()

    test.done()
  }
}