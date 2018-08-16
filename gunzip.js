var zlib = require('zlib').createGunzip
var createHash = require('crypto').createHash
process.stdin
  .pipe(createGunzip())
  .pipe(createHash('sha512')
  .pipe(process.stdout)
