import express from 'express'
import { Connection } from './database/db.js';
import dotenv from 'dotenv'
import DefaultData from './default.js';
import Router from './routers/router.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const PORT=8000;
const app = express();

dotenv.config() ;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('upload'));
  app.use(express.json());


const  MONGO_URL=process.env.MONGO_URL;

app.use('/',Router);

Connection(MONGO_URL);  // MongoDB Connection is created


app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
DefaultData();
