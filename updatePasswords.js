import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import User from "./models/User.js";

dotenv.config();

mongoose.connect(process.env.URI_MONGO)
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.error("Error trying connect to MongoDB:", err);
    });

async function updatePasswords() {
    try {
        const users = await User.find();
        for (const user of users) {
            if (user.password) {
                const hashedPassword = await bcryptjs.hash(user.password, 10);             
                user.password = hashedPassword;
                await user.save();
                console.log(`Password updated for user: ${user.name}`);
            }
        }

        console.log("All user passwords updated.");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error updating passwords:", error);
        mongoose.connection.close();
    }
}

updatePasswords();