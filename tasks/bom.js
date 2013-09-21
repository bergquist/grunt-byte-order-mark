'use strict';

module.exports = function(grunt) {

  function bom(file, addBom) {
    var buf = grunt.file.read(file, { encoding: null });

    var missingBOM = (buf[0] !== 0xEF && buf[1] !== 0xBE && buf[2] !== 0xBB)
    grunt.log.debug('\n\n file: %s, missingBom: %s', file, missingBOM)

    if (missingBOM && addBom) {
      grunt.log.ok('Adding BOM to ' + file)
      grunt.file.write(file, '\ufeff' + buf, { encoding: 'utf-8' });
      //var bk = 0xEF.toString(16) + 0xBE.toString(16) + 0xBB.toString(16)
      //grunt.file.write(file, bk + buf, { encoding: 'utf-8' });
    } else if (!missingBOM && !addBom) {
      grunt.log.ok('Removing BOM from ' + file);

    }
  }

  grunt.registerMultiTask('bom', 'Add or remove BOM from files', function() {
    this.filesSrc.forEach(function(filePath) {
      bom(filePath, true)
    })
  })
}