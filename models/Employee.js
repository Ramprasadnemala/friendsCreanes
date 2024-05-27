const mongoose= require("mongoose");

const employeeSchema= new mongoose.Schema({
    // name, email, phone, city
    name:{
         type:String,
         required:true
    },
    userNo:{
        type:Number,
        
    },
    earn:{
        type:Number,
        default:false
    },
   expense:{
       type:Number, 
   },
   date:{
        type:String,
   },
   work:{
        type:String,
   }

})

module.exports = mongoose.model("Employee",employeeSchema)