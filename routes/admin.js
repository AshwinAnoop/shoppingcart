const { response } = require('express');
var express = require('express');
const { render } = require('../app');
const productHelpers = require('../helpers/product-helper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  productHelpers.getAllProducts().then((products=>{
  res.render('admin/view-products',{admin:true,products})
  }))
  
  
 

});

router.get('/add-product',function(req,res){
  res.render('admin/add-product',{admin:true})

})
router.post('/add-product',(req,res)=>{
  productHelpers.addProduct(req.body,(id)=>{
  let image = req.files.Image 
  image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
    if(!err){
      res.render('admin/add-product',{admin:true}) 
    }
  })
  
  })

})

router.get('/delete-product/:id',(req,res)=>{
  let proId = req.params.id
  productHelpers.deleteProduct(proId).then((response)=>{
    res.redirect('/admin/')
  })
})

module.exports = router;