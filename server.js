const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


mongoose.connect('mongodb+srv://dbAdminUser:Loquillo9@cluster0-tvama.mongodb.net/cities?retryWrites=true&w=majority&useNewUrlParser=true' , function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

let City = require('./models/City');

/*var buenosAires = new City ({
  _id: new mongoose.Types.ObjectId(),
  name: 'Buenos Aires',
  country: 'Argentina'
});

buenosAires.save(function(err) {
  if (err) throw err;
    console.log('City successfully saved.');  
});*/

app.get('/cities', cors(), async (req, res) =>
  {
    City.find({
    }).exec(function(err, cities) {
    if (err) throw err;
    
    res.send(cities);
  });
  }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));