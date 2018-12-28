const say = require('say')

let voices = [
    { voice: 'Microsoft David Desktop', text: 'No people recognize me by my voice.' },
    { voice: 'Microsoft Zira Desktop', text: 'No people recognize me by my voice.' }
]

var v = voices[0];

say.speak(v.text, v.voice, 1)
