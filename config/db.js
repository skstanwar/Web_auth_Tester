import mongoose from 'mongoose';

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
           
            useNewUrlParser: true,
            useUnifiedTopology:true,
         
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

export {connectDB}