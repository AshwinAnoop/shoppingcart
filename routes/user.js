var express = require('express');
const { response } = require('../app');
var router = express.Router();
const productHelpers = require('../helpers/product-helper');
const userHelpers = require('../helpers/user-helper')

/* GET home page. */
router.get('/', function (req, res, next) {
    productHelpers.getAllProducts().then((products=>{
    res.render('user/view-products',{admin:false,products})
    }))
    
});

router.get('/login',function(req,res){
  res.render('user/login')

})

router.get('/signup',function(req,res){
  res.render('user/signup')

})

router.post('/signup',function(req,res){
  userHelpers.doSignup(req.body,(response)=>{
    console.log(response)
  })

})

module.exports = router;