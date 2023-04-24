const express= require("express");
const podcastApp=express.Router();
const expressAsyncHandler=require("express-async-handler");
require("dotenv").config();

var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: "podcastdb",
        public_id: file.fieldname + "-" + Date.now(),
      };
    },
});
  
//configure multer
var upload = multer({ storage: cloudinaryStorage });  

// extract body of request object
podcastApp.use(express.json());

// get all podcasts
podcastApp.get("/getpodcasts", expressAsyncHandler(async(request,response)=>{

    //get podcastCollectionObject
    let podcastCollectionObject = request.app.get("podcastCollectionObject");
    //read all podcasts
    let podcasts=await podcastCollectionObject.find().toArray()
    //send response
    response.send({message:"All podcasts",payload:podcasts})
}));

// get particular genre
podcastApp.get("/getpodcast/:category",expressAsyncHandler(async(request,response)=>{
    // get podcast collection object
    let podcastCollectionObject= request.app.get("podcastCollectionObject")
    //get category to be found
    let cat=request.params.category;
    // get podcasts by podcast category
    let podcasts=await podcastCollectionObject.find({category:cat}).toArray();
    // send response
    //if podcasts not found it receives null
    if(podcasts===null){
      response.send({message:"podcasts does not exist"})
    }
    else{ // else send podcast object as payload
      response.send({message:"found",payload:podcasts})
    }
  
  }))

// get most viewed podcasts
podcastApp.get("/mostviewed",expressAsyncHandler(async(request,response)=>{
  // get podcast collection object
  let podcastCollectionObject= request.app.get("podcastCollectionObject")
  // get podcasts by most viewed
  // db.collection.find( { qty: { $gt: 4 } } )
  let podcasts=await podcastCollectionObject.find({views:{$gt:500000}}).toArray();
  // send response
  //if podcasts not found it receives null
  if(podcasts===null){
    response.send({message:"podcasts does not exist"})
  }
  else{ // else send podcast object as payload
    response.send({message:"found",payload:podcasts})
  }

}))


// add a podcast
podcastApp.post("/create-podcast", expressAsyncHandler(async (request, response) => {

    //get podcastCollectionObject
    let podcastCollectionObject = request.app.get("podcastCollectionObject");
    //get podcast obj from req
    let podcastObj = request.body;
    //insert podcastObj
    let result = await podcastCollectionObject.insertOne(podcastObj);
    //send response
    response.send({ message: "Podcast created successfully" });
    
}));

// export podcastApp
module.exports=podcastApp;