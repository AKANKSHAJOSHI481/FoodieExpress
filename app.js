const express = require('express')
const bodyParser = require('body-parser')
const restaurant = require('./routes/restaurant')
const mealtypes = require('./routes/mealtype')
const menu = require('./routes/menu')
const payment = require('./routes/payment')
const mongoose = require('mongoose')
const cors = require('cors')
//connect with MongoDB
const  mongoAtlasUri = 'mongodb+srv://Akanksha:Akanksha@cluster0.4dtm8.mongodb.net/codejava';
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }




var app = express()
const port = process.env.PORT || 7070;
app.use(bodyParser.json())
app.use(cors())
app.use('/restaurant',restaurant)
app.use('/mealtypes',mealtypes)
app.use('/menu',menu)
app.use('/pay',payment)


if(process.env.NODE_ENV = "production"){
  app.use(express.static("Frontend1/build"))
  const path = require('path')
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,"Frontend1","build","index.html"))
  })
}
//Try to include MVC
app.listen(port,()=>{
    console.log('listening on port' ,port);
    
});
