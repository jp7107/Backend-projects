require('dotenv').config() // or import 'dotenv/config' if you're using ES6

 // remove this after you've confirmed it is working

const express = require('express')
const app = express()
const port = 3000
//---------------------------------



app.get('/home',(req,res) =>{
    res.send('homepage is here ');
    // response.sendFile('/Users/jp710/Documents/hellocode/Backend/bkl.html');
    // res.sendFile('./bkl.html',{root:__dirname});
});

//--------------------------------port-for-listen.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});

