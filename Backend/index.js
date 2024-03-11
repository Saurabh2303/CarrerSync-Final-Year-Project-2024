// Import express
const express = require('express');
const cors = require("cors");
// Import mongoose
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
// Import body-parser to parse request bodies
// const bodyParser = require('body-parser');
// Import routes
// const yourRoutes = require('./routes/yourRoutes');

// Initialize express app
const app = express();




app.use(cors({
  origin : ["http://127.0.0.1:5173" ]
}))

app.get('/posts',(req,res)=>{

  //Fetch Posts from Database
  const posts = [
    {
      id : 1,
      title : "title 1",
    },
    {
      id : 2,
      title : "title 2",
    }
  ]

  
  res.json(posts);
})


app.get('/message',(req,res)=>{
  res.send('Hello World Message');
})


// Use body-parser middleware to parse JSON bodies
// app.use(bodyParser.json());

// Database connection URL from MongoDB Atlas or local MongoDB server
const dbURI = 'mongodb+srv://wankhadesaurabh30:ERDY3k4lXHxVKoUu@finalyearproject.cke2fsr.mongodb.net/FinalYearProject?retryWrites=true&w=majority&appName=FinalYearProject';

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Use routes
// app.use('/api/yourEndpoint', yourRoutes);

// Define a port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));