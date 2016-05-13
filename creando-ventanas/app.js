document.write('la versión actual de nodejs es ' + process.version)
var fs = require('fs');
var contents = fs.readFileSync('./package.json', 'utf-8')
alert(contents)
