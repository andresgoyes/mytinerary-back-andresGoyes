import "dotenv/config.js";
import '../../config/database.js';
import Itinerary from '../Itinerary.js';

const itineraries = [
    {
        name: "Bruce Wayne",
        photo: "https://robohash.org/brucewayne.png",
        price: 3,
        duration: 5,
        city: "6727ad82f15adbff7e271dcf",
        hashtags: ["#Culture", "#History", "#Exploration"],
        likes: 0,
    },
    {
        name: "Clark Kent",
        photo: "https://robohash.org/clarkkent.png",
        price: 4,
        duration: 8,
        city: "6727ad82f15adbff7e271dcf",
        hashtags: ["#Adventure", "#Sightseeing", "#Travel"],
        likes: 0,
    },
    {
        name: "Diana Prince",
        photo: "https://robohash.org/dianaprince.png",
        price: 5,
        duration: 7,
        city: "6727ad82f15adbff7e271dcf",
        hashtags: ["#HistoricalSites", "#CulturalHeritage", "#Journeys"],
        likes: 0,
    },
    {
        name: "Barry Allen",
        photo: "https://robohash.org/barryallen.png",
        price: 2,
        duration: 3,
        city: "6727ad82f15adbff7e271dd0",
        hashtags: ["#Adventure", "#SpeedTravel", "#Outdoor"],
        likes: 0,
    },
    {
        name: "Arthur Curry",
        photo: "https://robohash.org/arthurcurry.png",
        price: 3,
        duration: 6,
        city: "6727ad82f15adbff7e271dd0",
        hashtags: ["#OceanExploration", "#WaterAdventures", "#Nature"],
        likes: 0,
    },
    {
        name: "Hal Jordan",
        photo: "https://robohash.org/haljordan.png",
        price: 4,
        duration: 4,
        city: "6727ad82f15adbff7e271dd1",
        hashtags: ["#SpaceTourism", "#Stargazing", "#Discovery"],
        likes: 0,
    },
    {
        name: "Oliver Queen",
        photo: "https://robohash.org/oliverqueen.png",
        price: 2,
        duration: 5,
        city: "6727ad82f15adbff7e271dd1",
        hashtags: ["#Nature", "#Adventure", "#Outdoor"],
        likes: 0,
    },
    {
        name: "Victor Stone",
        photo: "https://robohash.org/victorstone.png",
        price: 3,
        duration: 4,
        city: "6727ad82f15adbff7e271dd1",
        hashtags: ["#Technology", "#CityTour", "#Innovation"],
        likes: 0,
    },
    {
        name: "Billy Batson",
        photo: "https://robohash.org/billybatson.png",
        price: 1,
        duration: 2,
        city: "6727ad82f15adbff7e271dd1",
        hashtags: ["#YouthTravel", "#Fun", "#Exploration"],
        likes: 0,
    },
    {
        name: "Kara Danvers",
        photo: "https://robohash.org/karadanvers.png",
        price: 4,
        duration: 5,
        city: "6727ad82f15adbff7e271dd2",
        hashtags: ["#CulturalHeritage", "#Exploration", "#Inspiration"],
        likes: 0
    },
    {
        name: "Bruce Wayne",
        photo: "https://robohash.org/brucewayne.png",
        price: 3,
        duration: 5,
        city: "6727ad82f15adbff7e271dd2",
        cityphoto: "https://images.unsplash.com/photo-1560443464-5c14e034a4b7", // Nueva York
        hashtags: ["#Culture", "#History", "#Exploration"],
        likes: 0,
    },
    {
        name: "Clark Kent",
        photo: "https://robohash.org/clarkkent.png",
        price: 4,
        duration: 8,
        city: "6727ad82f15adbff7e271dd2",
        cityphoto: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", // París
        hashtags: ["#Adventure", "#Sightseeing", "#Travel"],
        likes: 0,
    },
    {
        name: "Diana Prince",
        photo: "https://robohash.org/dianaprince.png",
        price: 5,
        duration: 7,
        city: "6727ad82f15adbff7e271dd3",
        cityphoto: "https://images.unsplash.com/photo-1526154053182-e2c2d88f6a8b", // Roma
        hashtags: ["#HistoricalSites", "#CulturalHeritage", "#Journeys"],
        likes: 0,
    },
    {
        name: "Barry Allen",
        photo: "https://robohash.org/barryallen.png",
        price: 2,
        duration: 3,
        city: "6727ad82f15adbff7e271dd3",
        cityphoto: "https://images.unsplash.com/photo-1529973565450-d2b7c3b1118e", // Tokio
        hashtags: ["#Adventure", "#SpeedTravel", "#Outdoor"],
        likes: 0,
    },
    {
        name: "Arthur Curry",
        photo: "https://robohash.org/arthurcurry.png",
        price: 3,
        duration: 6,
        city: "6727ad82f15adbff7e271dd3",
        cityphoto: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Venecia
        hashtags: ["#OceanExploration", "#WaterAdventures", "#Nature"],
        likes: 0,
    },
    {
        name: "Hal Jordan",
        photo: "https://robohash.org/haljordan.png",
        price: 4,
        duration: 4,
        city: "6727ad82f15adbff7e271dd4",
        cityphoto: "https://images.unsplash.com/photo-1479888230021-c24f136d849f", // Sídney
        hashtags: ["#SpaceTourism", "#Stargazing", "#Discovery"],
        likes: 0,
    },
    {
        name: "Oliver Queen",
        photo: "https://robohash.org/oliverqueen.png",
        price: 2,
        duration: 5,
        city: "6727ad82f15adbff7e271dd4",
        cityphoto: "https://images.unsplash.com/photo-1566241177829-fb00a9ba5f63", // San Francisco
        hashtags: ["#Nature", "#Adventure", "#Outdoor"],
        likes: 0,
    },
    {
        name: "Victor Stone",
        photo: "https://robohash.org/victorstone.png",
        price: 3,
        duration: 4,
        city: "6727ad82f15adbff7e271dd4",
        cityphoto: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Berlín
        hashtags: ["#Technology", "#CityTour", "#Innovation"],
        likes: 0,
    },
    {
        name: "Billy Batson",
        photo: "https://robohash.org/billybatson.png",
        price: 1,
        duration: 2,
        city: "6727ad82f15adbff7e271dd5",
        cityphoto: "https://images.unsplash.com/photo-1534950421446-234e00d5b97d", // Londres
        hashtags: ["#YouthTravel", "#Fun", "#Exploration"],
        likes: 0,
    },
    {
        name: "Kara Danvers",
        photo: "https://robohash.org/karadanvers.png",
        price: 4,
        duration: 5,
        city: "6727ad82f15adbff7e271dd5",
        cityphoto: "https://images.unsplash.com/photo-1549924231-f129b911e442", // Moscú
        hashtags: ["#CulturalHeritage", "#Exploration", "#Inspiration"],
        likes: 0
    },
    {
    name: "Dick Grayson",
    photo: "https://robohash.org/dickgrayson.png",
    price: 4,
    duration: 5,
    city: "6727ad82f15adbff7e271dd6",
    hashtags: ["#UrbanExploration", "#Adventure", "#NightLife"],
    likes: 0,
},
{
    name: "Stephanie Brown",
    photo: "https://robohash.org/stephaniebrown.png",
    price: 3,
    duration: 4,
    city: "6727ad82f15adbff7e271dcf",
    hashtags: ["#History", "#Culture", "#Exploration"],
    likes: 0,
},
{
    name: "Damian Wayne",
    photo: "https://robohash.org/damianwayne.png",
    price: 2,
    duration: 3,
    city: "6727ad82f15adbff7e271dd5",
    hashtags: ["#Adventure", "#Mystery", "#CityLife"],
    likes: 0,
},
{
    name: "Koriand'r",
    photo: "https://robohash.org/koriandr.png",
    price: 4,
    duration: 6,
    city: "6727ad82f15adbff7e271dd4",
    hashtags: ["#SpaceTourism", "#Adventure", "#Exploration"],
    likes: 0,
},
{
    name: "Roy Harper",
    photo: "https://robohash.org/royharper.png",
    price: 3,
    duration: 5,
    city: "6727ad82f15adbff7e271dd3",
    hashtags: ["#Nature", "#Hiking", "#Adventure"],
    likes: 0,
},
{
    name: "Wally West",
    photo: "https://robohash.org/wallywest.png",
    price: 2,
    duration: 4,
    city: "6727ad82f15adbff7e271dd7",
    hashtags: ["#SpeedTravel", "#Sightseeing", "#Fun"],
    likes: 0,
},
{
    name: "Donna Troy",
    photo: "https://robohash.org/donnatroy.png",
    price: 4,
    duration: 5,
    city: "6727ad82f15adbff7e271dcf",
    hashtags: ["#History", "#Heritage", "#Inspiration"],
    likes: 0,
},
{
    name: "Hank Hall",
    photo: "https://robohash.org/hankhall.png",
    price: 3,
    duration: 4,
    city: "6727ad82f15adbff7e271dd4",
    hashtags: ["#Nature", "#Adventure", "#Exploration"],
    likes: 0,
},
{
    name: "Dawn Granger",
    photo: "https://robohash.org/dawngranger.png",
    price: 5,
    duration: 6,
    city: "6727ad82f15adbff7e271dd5",
    hashtags: ["#ScenicViews", "#Peace", "#Relaxation"],
    likes: 0,
},
{
    name: "Gar Logan",
    photo: "https://robohash.org/garlogan.png",
    price: 2,
    duration: 3,
    city: "6727ad82f15adbff7e271dd3",
    hashtags: ["#Wildlife", "#Adventure", "#Nature"],
    likes: 0,
},
{
    name: "Renee Montoya",
    photo: "https://robohash.org/reneemontoya.png",
    price: 3,
    duration: 4,
    city: "6727ad82f15adbff7e271dd7",
    hashtags: ["#CityTour", "#Culture", "#Heritage"],
    likes: 0,
},
{
    name: "Helena Bertinelli",
    photo: "https://robohash.org/helenabertinelli.png",
    price: 4,
    duration: 5,
    city: "6727ad82f15adbff7e271dd6",
    hashtags: ["#History", "#Mystery", "#Adventure"],
    likes: 0,
},
{
    name: "Cassandra Cain",
    photo: "https://robohash.org/cassandracain.png",
    price: 3,
    duration: 6,
    city: "6727ad82f15adbff7e271dd4",
    hashtags: ["#MartialArts", "#Training", "#Exploration"],
    likes: 0,
},
{
    name: "Pamela Isley",
    photo: "https://robohash.org/pamelaisley.png",
    price: 2,
    duration: 4,
    city: "6727ad82f15adbff7e271dd3",
    hashtags: ["#BotanicalGardens", "#Nature", "#Ecology"],
    likes: 0,
},
{
    name: "Talia al Ghul",
    photo: "https://robohash.org/taliaalghul.png",
    price: 5,
    duration: 7,
    city: "6727ad82f15adbff7e271dcf",
    hashtags: ["#History", "#Mystery", "#CulturalHeritage"],
    likes: 0,
},
{
    name: "Lucius Fox",
    photo: "https://robohash.org/luciusfox.png",
    price: 4,
    duration: 5,
    city: "6727ad82f15adbff7e271dd7",
    hashtags: ["#Innovation", "#TechTour", "#CityLife"],
    likes: 0,
},
{
    name: "Jim Gordon",
    photo: "https://robohash.org/jimgordon.png",
    price: 3,
    duration: 6,
    city: "6727ad82f15adbff7e271dd6",
    hashtags: ["#CityTour", "#History", "#LawEnforcement"],
    likes: 0,
},
{
    name: "Harvey Dent",
    photo: "https://robohash.org/harveydent.png",
    price: 2,
    duration: 3,
    city: "6727ad82f15adbff7e271dd5",
    hashtags: ["#CityLife", "#Justice", "#Adventure"],
    likes: 0,
},
{
    name: "Selina Kyle",
    photo: "https://robohash.org/selinakyle.png",
    price: 4,
    duration: 4,
    city: "6727ad82f15adbff7e271dd4",
    hashtags: ["#Mystery", "#Nightlife", "#Exploration"],
    likes: 0,
},
{
    name: "Alfred Pennyworth",
    photo: "https://robohash.org/alfredpennyworth.png",
    price: 5,
    duration: 5,
    city: "6727ad82f15adbff7e271dcf",
    hashtags: ["#History", "#Service", "#Dedication"],
    likes: 0,
},
];

console.log(itineraries);

Itinerary.insertMany(itineraries)
    .then(() => {
        console.log("itineraries inserted successfully ");
        process.exit();
    },)
    .catch(error => {
        console.log("Error inserting itineraries: ", error);
        process.exit(1);
    },);