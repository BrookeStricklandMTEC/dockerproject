const express = require("express")
const hostname = require("os").hostname()
const app = express()

app.get("/", (req,res) =>{
    res.send("my first docker container ID:" + hostname)
})  

app.listen(8080, ()=> {
    console.log("listening on port 8080")
})