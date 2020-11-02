const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/dist/angular-material-base'));

app.get('/*', (req,res)=> {
    res.sendFile(__dirname + '/dist/angular-material-base/index.html')
});

app.listen(port, ()=>
console.log("ok"));

