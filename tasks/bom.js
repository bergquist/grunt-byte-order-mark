'use strict';

module.exports = function(grunt) {

  function bom(file) {
    var buf = grunt.file.read(file, { encoding: null });

    var missingBOM = (buf[0] !== 0xEF && buf[1] !== 0xBE && buf[2] !== 0xBB)
    grunt.log.debug('\n\n file: %s, missingBom: %s', file, missingBOM)

    if (missingBOM) {
      grunt.log.ok('Adding BOM to ' + file)
      grunt.file.write(file, '\ufeff' + buf, { encoding: 'utf-8' });
    }
  }

  grunt.registerMultiTask('bom', 'Add or remove BOM from files', function() {
    this.filesSrc.forEach(function(filePath) {
      bom(filePath)
    })
  })
}