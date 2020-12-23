var db=require('../config/connection')
var collection=require('../config/collections')
var ObjectID = require('mongodb').ObjectID
const { response } = require('../app')


module.exports={

    addProduct:(product,callback)=>{
        
        db.get().collection('product').insertOne(product).then((data)=>{
            callback(data.ops[0]._id)

        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })

    },
    deleteProduct:(prodId)=>{
        console.log(prodId)
        console.log(ObjectID(prodId))
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:ObjectID(prodId)}).then((response)=>{
                console.log(response)
                resolve(response)
            })
        })
    }
}