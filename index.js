const say = require('say')
const fs = require('fs')

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.

var filename = process.argv[2];
let speed = 1.2;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  say.speak(data, 'reader.voice', speed);

  setTimeout(() => {
    console.log('prematurely killing speech')

    say.stop((err) => {
      if (err) {
        return console.error('unable to stop speech', err)
      }

      console.log('stopped')
    })
}, 7 * 1000)
});
