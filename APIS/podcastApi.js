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
podcastApp.get("/getpodcast/:podcastName",expressAsyncHandler(async(request,response)=>{
    // get podcast collection object
    let podcastCollectionObject= request.app.get("podcastCollectionObject")
    //get podcastname to be found
    let pname=request.params.podcastName
    // get podcast by podcast name
    let podcasts=await podcastCollectionObject.find({podcastName:pname})
    // send response
    //if podcast not found it receives null
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