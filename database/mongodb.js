import mongoose from "mongoose";
import { DB_URI , NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('Please define the MONGO_URI environment variable inside .env.<development/production>.local')
}

const connect = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`)
    } catch (error) {
        console.log(error)
        // eslint-disable-next-line no-undef
        process.exit(1)
    }
}

export default connect