import "dotenv/config.js";
import '../../config/database.js';
import User from '../User.js';

const users = [
    {
        name: 'Carolina',
        lastName: 'Chapuel',
        email: 'chapuelcarolina@gmail.com',
        password: '123456',
        photoUrl: 'https://robohash.org/carolinachapuel.png',
        country: 'Colombia',
        online: false
    },
    {
        name: 'Andres',
        lastName: 'Goyes',
        email: 'djpippe@hotmail.com',
        password: '123456',
        photoUrl: 'https://robohash.org/andresgoyes.png',
        country: 'Colombia',
        online: false
    }
];

console.log(users);

User.insertMany(users)
    .then(() => {
        console.log("Users inserted successfully ");
        process.exit();
    })
    .catch(error => {
        console.log("Error inserting users: ", error);
        process.exit(1);
    });