
require('./')(process.stdin)

if (process.stdin.setRawMode)
  process.stdin.setRawMode(true)
else
  require('tty').setRawMode(true)

process.stdin.on('keypress', function (c, key) {
  console.log(0, c, key)
  if (key.ctrl && key.name == 'c') {
    process.stdin.pause()
  }
})
process.stdin.resume()
