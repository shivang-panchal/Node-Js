const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shivangcrud").then(()=>{
    console.log("Connected to the database")
}).catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({

    name:{

        type:String
    },
    
    email:{

        type:String
    },

    password:{

        type:String
    },

})

const Usermodel = mongoose.model("User",schema);

module.exports = Usermodel