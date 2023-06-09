import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js' // DB connection
import { fileURLToPath } from 'url'
import {dirname, join} from 'path';
// import { temp } from './userControl/userController.js'



dotenv.config()
const PORT = process.env.PORT;
const mode = process.env.NODE_ENV

const app = express()
console.log(process.env.MONGODB_URI);
connectDB() 
const fileUrl= new URL(import.meta.url);
const filePath=dirname(fileURLToPath(fileUrl));
const staticPath = join(filePath,'static');
const publicPath= join(filePath,'public');
app.use(express.static(staticPath));

console.log(join(publicPath, 'index.html'));
app.get('/',(req, res)=>{
    res.sendFile(join(publicPath, 'index.html'));
})
app.listen(PORT, console.log(`Server running in ${mode} mode on port ${PORT}`))
