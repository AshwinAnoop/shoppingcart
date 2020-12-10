var express = require('express');
const { render } = require('../app');
const productHelper = require('../helpers/product-helper');
const productHelpers = require('../helpers/product-helper')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  productHelper.getAllProducts().then((products=>{
  res.render('admin/view-products',{admin:true,products})
  }))
  
  
 

});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')

})
router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)
})

module.exports = router;