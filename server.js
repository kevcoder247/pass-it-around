const express = require('express');
const app = express();
const port = 3000;


//INDEX

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> </br>
    <a href="/98">take one down and pass it around =></a> `)
})

//Create a route that takes Parameter and checks if the number of beers left is greater than 0
// if beer left greater than 0 link keeps decreasing amount of beers left else until 0 is reached
app.get('/:beersLeft', (req, res) => {
   if(req.params.beersLeft <= 0){
       res.send(`${req.params.beersLeft} Beers left on the wall <br/>
         <a href="/"> now put them back and start over</a>`)
   }else{
       res.send(`${req.params.beersLeft} Beers left on the wall
        <a href=${req.params.beersLeft - 1}> take one down and pass it around</a>                                                    `)
   }
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})