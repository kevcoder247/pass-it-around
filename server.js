const express = require('express');
const app = express();
const port = 3000;


//INDEX

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> </br>
    <a href="/98">take one down and pass it around</a> `)
})




app.listen(port, () => {
    console.log(`listening on ${port}`)
})