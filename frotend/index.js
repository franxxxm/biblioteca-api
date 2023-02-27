const express = require("express");
const app = express();
const router = express.Router();
const hbs  = require('express-handlebars');
const bodyParser = require("body-parser")

//configuração handlebars
app.engine("hbs", hbs.engine({
    extname:'hbs',
    defaultLayout:'main'
}));
app.set("view engine", 'hbs');

//bodyparser configuração
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

router.get("/", (req, res)=>{
    res.render("./arquivohtml.hbs");

})

app.use('/', router)

app.listen(2000, ()=>{
    console.log('adjfposd')
})

