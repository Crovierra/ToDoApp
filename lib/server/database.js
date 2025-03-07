import { MongoClient } from "mongodb"
import "dotenv/config"

export async function connectDatabase(){
    try {
        const client = new MongoClient(process.env.MONGO_DB_URI)

        await client.connect()
    } catch (error) {
        console.log("Connection to Database Error : ",error)
    }
}