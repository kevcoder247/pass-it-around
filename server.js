const express = require('express');
const app = express();
const port = 3000;


//INDEX

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> </br>
    <a href="/98">take one down and pass it around =></a> `)
})

//Route that takes Parameter and checks if the number of beers left is greater than 0
app.get('/:beersLeft', (req, res) => {
   res.send('hello')
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})