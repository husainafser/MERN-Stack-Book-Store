import express from "express";
import { mongodburl } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app=express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//option1 : Allow origin of default of cors(*)
app.use(cors());
//option2 : allow custom origin
// app.use(cors(
//     {
//         origin : 'http://localhost:5001',
//         methods : ['GET','POST','PUT','DELETE'],
//         allowedHeaders:['content-Type'],
//     }
// ))
app.get('/' , (request, response) =>{
    console.log(request);
return response.status(234).send('Welcome');
});

app.use('/books',booksRoutes);

mongoose.connect(mongodburl).then(()=>{
    console.log('connected');
    app.listen(5001, ()=>{
        console.log(`App is listening to PORT`)
    })
}

).catch((error)=>{
   console.log(error.message);
}

)