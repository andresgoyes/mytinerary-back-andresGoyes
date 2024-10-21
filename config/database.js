import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

async function dbConnect(params) {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }

}

dbConnect()