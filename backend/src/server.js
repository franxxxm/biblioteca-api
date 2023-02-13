const express = require("express");
const app = express();


app.use(express.json())

//router
const routes = require("./routes/routes");

app.use("/api", routes)

app.listen(3030, ()=>{
    console.log("foi")
})