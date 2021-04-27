const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(express.static('.'));
app.use(bodyParser.json());


// Let the password be empty
let passwort = '';
for (let i = 0; i < 6; i++) {
    let zeichen;
    do {
        zeichen = String.fromCharCode(Math.round(Math.random() * 255))
    } while (!zeichen.match(/[-_@a-z0-9]/i))
    passwort += zeichen;
}
console.log('passwort: ' + passwort);


app.post("/login", (req, res) => {
    let {
        pass
    } = req.body;
    if (pass === passwort) {
        res.json({
            status: 'success'
        });
    } else {
        res.json({
            status: 'fail'
        });
    }
});

// to set port number!
app.listen(9922, e => console.log('server bereit auf port ' + 9922));