const express = require('express')
const sequelize = require('./models/orm_setup')
const app = express()
const PORT = process.env.PORT || 8080;
require('dotenv').config();
const cors = require("cors");
const routes = require("./routes/route")
let db = require("./models/orm_setup");
app.use(cors());
app.use(express.json());             // for application/json
app.use(express.urlencoded()); 
app.use(`/images`, express.static(`images`));   


db.sync()
.then(()=> console.log('model formed'))
.catch(err=> console.log(err))


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'POST, GET')
    next()
  })

app.use('/',require("./routes/route")) //index route


app.use('/',require("./routes/route"))
app.use('/malecontestants',require("./routes/route")) //all male contestants
app.use('/malecontestants/:id',require("./routes/route"))
app.use('/femalecontestants',require("./routes/route")) //all male contestants
app.use('/femalecontestants/:id',require("./routes/route"))

app.listen(PORT, ()=>{
    console.log('takum listening on port ${port}')
})