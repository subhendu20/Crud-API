const mongoose = require('mongoose')

const api = new mongoose.Schema({
          name:{
                    type:String,
                    required:true
          },
          age:{
                    type:Number,
                    required:true

          },
          company:{
                    type:String,
                    required:true
          },
          jobrole:{
                    type:String,
                    required:true
          }

})

const apidata = new mongoose.model('crudapi',api)
module.exports = apidata;