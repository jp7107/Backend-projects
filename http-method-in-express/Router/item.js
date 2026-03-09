const express = require('express')
const router = express.Router()

router.get('/home',(req,res) =>{
    res.send('homepage is here ');
    // response.sendFile('/Users/jp710/Documents/hellocode/Backend/bkl.html');
    // res.sendFile('./bkl.html',{root:__dirname});
})
router.post('/about', (req, res) => {
  res.send("About is here");
//   res.json({x:1,y:2,z:1});

})
router.put('/others', (req, res) => {
  res.send("update data");
})
router.delete('/others', (req, res) => {
  res.send("remove data");
})

module.exports = router

