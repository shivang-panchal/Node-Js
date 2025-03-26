import express from 'express'
import mongoose from 'mongoose'
import { urlShort, getOriginalUrl } from "./controllers/url.js";


const app = express();
const port = 3001;

app.use(express.urlencoded({extended:true}))

mongoose.set('strictQuery', false); 
mongoose.connect("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
  console.log("database connetion succesfulll");
}).catch((e)=>{
  console.log(e);
})

  app.get('/',(req,res)=>{
    res.render("server.ejs",{shortUrl:null})
  })

  // handle url submission
  app.post("/shorten", urlShort);

  // redirect to original url using short url
  app.get("/:shortCode", getOriginalUrl);


app.listen(port,()=>console.log(`Server is running on port ${port}`))