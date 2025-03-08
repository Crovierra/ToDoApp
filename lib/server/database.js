import mongoose from "mongoose"
import "dotenv/config"

export async function connectDatabase(){
    try {
        if (mongoose.connection.readyState === 1) { // Check if we already connected to MongoDB
            console.log('✅ Already connected to MongoDB');
            return;
          }

        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Connection to Database Error : ",error)
    }
}