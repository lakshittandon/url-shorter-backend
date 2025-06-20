import express from "express";
import cors from "cors";

const app = express();
import {nanoid} from "nanoid"
import dotenv from "dotenv";
dotenv.config("./.env")
import filecabinet from "./src/config/mongo.config.js"
import urlSchema from "./src/models/shorturl.model.js ";
import shortUrlRouter from "./src/routes/shorturl.route.js";
import {redirectFromShortUrl} from "./src/controller/short_url.controller.js";
import auth_routes from "./src/routes/auth.routes.js";
import cookieParser from 'cookie-parser';


app.use(
  cors({
    origin: [
      'https://url-shorter-frontend-git-main-lakshit-tandons-projects.vercel.app',
      'http://localhost:5173'
    ],
    credentials: true
  })
);
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());  

app.use("/api/auth",auth_routes)
app.use("/api/create",shortUrlRouter)

app.get("/:id" , redirectFromShortUrl)


app.listen(5004 , () =>{
    filecabinet();
    console.log("Server is running on http://localhost:5004");
})



 