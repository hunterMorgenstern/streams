var net = require('net')
var crypto = require('crypto')
var pw = 'abc123'

net.createServer(function (stream) {
 var enc = crypto.createDecipher('aes192', pw)
				stream
								.pipe(enc)
								.pipe(net.connect(5000, 'localhost'))
								.pipe(crypto.createCipher('aes192',pw))
								.pipe(stream)
}).listen(5005)
