const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ainevinted:1234@cluster0.hwklz.mongodb.net/aine-bakery").then(()=>{
    console.log("Connected to DB");
}).catch((e)=>{
    console.log(e);
})