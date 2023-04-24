const express= require("express");
const userApp=express.Router();
const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
require("dotenv").config();
 
//to extract body of request object
userApp.use(express.json());

// login user
userApp.post(
  "/login",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user credentials obj from client
    let userCredObj = request.body;
    //seacrh for user by username
    let userOfDB = await userCollectionObject.findOne({
      username: userCredObj.username,
    });
    //if username not existed
    if (userOfDB == null) {
      response.send({ message: "Invalid user" });
    }
    //if username existed
    else {
      //compare passwords
      let status = await bcryptjs.compare(
        userCredObj.password,
        userOfDB.password
      );
      //if passwords not matched
      if (status == false) {
        response.send({ message: "Invalid password" });
      }
      //if passwords are matched
      else {
        //create token
        let token = jwt.sign(
          { username: userOfDB.username },
          process.env.SECRET_KEY,
          { expiresIn: 60 }
        );
        //send token
        response.send({
          message: "success",
          payload: token,
          userObj: userOfDB,
        });
      }
    }
  })
);

//create a route to 'create-user'
userApp.post("/create-user",expressAsyncHandler(async (request, response) => {

      //get userCollectionObject
      let userCollectionObject = request.app.get("userCollectionObject");
      //seacrh for user by username
      let userOfDB = await userCollectionObject.findOne({
        username: newUserObj.username,
      });
      //if user existed
      if (userOfDB !== null) {
        response.send({
          message: "Username has already taken..Plz choose another",
        });
      }
      //if user not existed
      else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
        //replace plain password with hashed password in newUserObj
        newUserObj.password = hashedPassword;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj);
        //send response
        response.send({ message: "New User created" });
      }
  })
);


// export userApp
module.exports=userApp;