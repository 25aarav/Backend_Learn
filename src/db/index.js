import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'


const connectDB =  async()=>
{
   try{
        const connectionInstance=  await mongoose.connect(`${process.env.MONGO__URL} / ${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST : ${connectionInstance.connection.host}`) // this console is used to check the host. Since database of every phase is different
   }
   catch(error)
   {
     console.log(`MongoDB connection error ${error}`);
     process.exit(1)
   }
}


export default connectDB;

