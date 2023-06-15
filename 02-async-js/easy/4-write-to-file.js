const fs = require('fs');
var content = "hello world"
fs.writeFile('myfile.txt', content, 'utf8', err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("sucess");
});