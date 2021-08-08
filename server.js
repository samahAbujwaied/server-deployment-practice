'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./handler/404');
const errorHandler = require('./handler/500');
function start(port) {
    app.listen(port, ()=> console.log(`will run on ${port}`))
}
app.get('/', (req, res)=> {
    res.send('Home route')
});
app.post('/badreq', (req,res)=> {
    let num = 1;
    num.forEach(num=> 
    console.log(num));
    res.send('sorry bad req !!!!! ');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "Samah", 
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}