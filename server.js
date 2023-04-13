require("dotenv").config();

const express= require("express");

const connectToDB=require("./config/database");

const Flight=require("./models/Flight");

const app=express();

//*  setting the middleware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
  app.use(express.urlencoded({ extended: false }));


  //* query all documents and return the selected fields
  app.get("/flights", (req, res) => {
    console.log(req);
   
    Flight.find({},(error,allFlights)=>{
    res.render('Index',{flights:allFlights})
    })
  });
//* post flights

  app.post("/flights", (req, res) => {
    console.log(req.body);
   
 
   
    Flight.create(req.body, (error,createdFlight)=>{
      
    
      res.redirect('/flights');
    
    })
    
  });

  app.listen(3000, () => {
    console.log("Server is up!");
    connectToDB();
  });