const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/learn" , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log(`connection succesfull`);
}).catch((e)=>{
    console.log(e);
  })