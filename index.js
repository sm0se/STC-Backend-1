const express = require('express')
const app = express()

app.get('/', function (req, res) { 
    const name = req.query.name      // input name
    res.send("Your name is " + name) // prints the name defined from the url
})

app.get("/sum", function (req, res) {
    const num1 = req.query.num1;    //input number 
    const num2 = req.query.num2;
    const num3 = req.query.num3;
    const sum = Number(num1) + Number(num2) + Number(num3) // converts string to number
    res.send("The average of the numbers is " + sum / 3)  
})

const port = 3000
app.listen(port);
