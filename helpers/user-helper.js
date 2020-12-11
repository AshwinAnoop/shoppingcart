var db=require('../config/connection')
var collection=require('../config/collections')
const { response } = require('../app')
const collections = require('../config/collections')

module.exports={
    doSignup:(userData,callback)=>{
        
        db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data)=>{
            callback(data.ops[0])

        })
    }
}