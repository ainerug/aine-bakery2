const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khaas25:1234@wlms.zjs0lk4.mongodb.net/aine-bakery").then(()=>{
    console.log("Connected to DB");
}).catch((e)=>{
    console.log(e);
})