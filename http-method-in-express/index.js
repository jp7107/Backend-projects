const express = require('express')
const app = express()
const port = 3000
//---------------------------------



//import the item.js file
const item = require('./Router/item.js')

//now load the file with handle requests to /api name. 
app.use('/api', item)
//what is actually happening in routing 
// -> /api/home  -> homepage
// -> /api/about -> aboutpage post request
// -> /api/others -> others put request same as Delete
// thats all called express.router

//-------------new file------------
const birds = require('./Router/birds.js')
// ...
app.use('/birds', birds)


//--------------------------------port-for-listen.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

