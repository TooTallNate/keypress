
require('./')(process.stdin)

process.stdin.setRawMode(true)

process.stdin.on('keypress', function (c, key) {
  console.log(0, c, key)
  if (key.ctrl && key.name == 'c') {
    process.stdin.pause()
  }
})
process.stdin.resume()
