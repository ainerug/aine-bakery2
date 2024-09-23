const express = require("express");
require("./DB/conn");
const cors = require("cors");
const Cakes = require("./Model/Cakes");
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",  (req, res) => {
    res.send("Welcome to Aine Bakery");
})


app.post("/cakes", async (req, res) => {
    try {
        const addCake = new Cakes(req.body);
        addCake.save().then(()=>{
            res.status(200).send(addCake);
        }).catch((e)=>{
            res.status(404).send(e);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/cakes", async (req, res)=> {
    try {
        const allCakes = await Cakes.find();
        res.status(200).send(allCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/cakes/:category", async (req, res)=> {
    try {
        const allCakes = await Cakes.find({category: req.params.category});
        res.status(200).send(allCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.listen(PORT, () => {
    console.log("Api is running on PORT: "+ PORT);
})