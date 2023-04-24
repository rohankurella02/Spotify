const express = require('express');
const app = express();
const mclient=require("mongodb").MongoClient;

require("dotenv").config;
// integrating front and back
const path=require('path');
app.use(express.static(path.join(__dirname,"./build")))
// db connection url
const DBurl= 'mongodb+srv://mydatabase:mydatabase@mycluster.3qnvw.mongodb.net/?retryWrites=true&w=majority';

// deployment
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// })

// connect with mongodb server
mclient.connect(DBurl)
.then((client)=>{
    let dbObj=client.db("ListenPodcast");
    //create collection objects
    let userCollectionObject=dbObj.collection("usercollection");
    let podcastCollectionObject=dbObj.collection("podcastcollection");

    //sharing collection objects to APIs
    app.set("userCollectionObject",userCollectionObject);
    app.set("podcastCollectionObject",podcastCollectionObject)

    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection',err))

const userApp=require("./APIS/userApi");
const podcastApp=require("./APIS/podcastApi");

app.use("/user-api",userApp);
app.use("/podcast-api",podcastApp);

// Defining routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

//dealing with page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

  //handling invalid paths
app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` });
});

  //error handling middleware
app.use((error, request, response, next) => {
    response.send({ message: "Error occurred", reason: `${error.message}` });
});
  
// Start the server
const port=process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
