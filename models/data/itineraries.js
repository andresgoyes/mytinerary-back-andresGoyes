import "dotenv/config.js";
import '../../config/database.js';
import Itinerary from '../Itinerary.js';

const itineraries = [
    {
        creator: "James Johnson",
        creatorPhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Climb the Eiffel Tower",
        photo: "https://cdn-imgix.headout.com/mircobrands-content/image/15fa043d98f93cfb629799a920ddb1eb-Why%20Visit%20the%20Eiffel%20Tower%20at%20Night%3F.jpeg",
        price: 4,
        duration: 3,
        likes: 200,
        hashtags: ["#Iconic", "#Views", "#Travel"],
        city: "67411948c654461fbac95202"
    },
    {
        creator: "John Smith",
        creatorPhoto: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Explore the Louvre Museum",
        photo: "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/16:9/w_2560%2Cc_limit/Secrets%2520of%2520Louvre%25201.jpg",
        price: 5,
        duration: 4,
        likes: 250,
        hashtags: ["#Art", "#History", "#Culture"],
        city: "67411948c654461fbac95202"
    },
    {
        creator: "Michael Brown",
        creatorPhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Explore Tokyo Skytree",
        photo: "https://s3.voyapon.com/wp-content/uploads/sites/3/2024/07/12202732/Tokyoskytree_Maria_3.jpg",
        price: 5,
        duration: 4,
        likes: 320,
        hashtags: ["#Skyline", "#Modern", "#Adventure"],
        city: "67411948c654461fbac95203"
    },
    {
        creator: "William Davis",
        creatorPhoto: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Visit Sensō-ji Temple",
        photo: "https://media.istockphoto.com/id/1329537420/photo/tokyo-japan-tokyo-japan-city-skyline-at-asakusa-temple.jpg?s=612x612&w=0&k=20&c=DB-sj6japx0l5UtxhShUS6mVhymDvodra8hnzo13h7o=",
        price: 3,
        duration: 2,
        likes: 450,
        hashtags: ["#Historic", "#Culture", "#Japan"],
        city: "67411948c654461fbac95203"
    },
    {
        creator: "David Miller",
        creatorPhoto: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Stroll through Shinjuku Gyoen",
        photo: "https://www.japan-guide.com/g18/3034_001_01.jpg",
        price: 2,
        duration: 1,
        likes: 280,
        hashtags: ["#Nature", "#Relaxing", "#Tokyo"],
        city: "67411948c654461fbac95203"
    },
    {
        creator: "Richard Wilson",
        creatorPhoto: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "Visit the Statue of Liberty",
        photo: "https://cdn-imgix.headout.com/media/images/0d83e157c884a6c3afc30533fd27801a-846-new-york-statue-of-liberty-island---ellis-island-tour-with-audioguide-01.jpg",
        price: 3,
        duration: 5,
        likes: 120,
        hashtags: ["#Culture", "#History", "#Exploration"],
        city: "67411948c654461fbac95204"
      },
      {
        creator: "Joseph Moore",
        creatorPhoto: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Explore Central Park",
        photo: "https://thetourguy.com/wp-content/uploads/2021/05/Top-Things-to-do-in-Central-Park-1440-x-675.jpeg",
        price: 2,
        duration: 4,
        likes: 95,
        hashtags: ["#Nature", "#Relax", "#Photography"],
        city: "67411948c654461fbac95204"
      },
      {
        creator: "Charles Taylor",
        creatorPhoto: "https://randomuser.me/api/portraits/men/8.jpg",
        name: "Broadway Show Experience",
        photo: "https://ca-times.brightspotcdn.com/dims4/default/5f9802f/2147483647/strip/true/crop/3600x1918+0+0/resize/1200x639!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff4%2Fdc%2F1a501ee74762a61efd6559977902%2Fnew-york-new-york-the-cast-photo-by-paul-kolnik.jpg",
        price: 5,
        duration: 3,
        likes: 150,
        hashtags: ["#Entertainment", "#Broadway", "#Music"],
        city: "67411948c654461fbac95204"
      },
      {
        creator: "Thomas Anderson",
        creatorPhoto: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Hike Table Mountain",
        photo: "https://africafreak.com/wp-content/uploads/2019/08/Table-Mountain-panorama-900x600.jpg",
        price: 4,
        duration: 3,
        likes: 310,
        hashtags: ["#Adventure", "#Nature", "#Views"],
        city: "67411948c654461fbac95205"
    },
    {
        creator: "Christopher Thomas",
        creatorPhoto: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "Visit Boulders Beach Penguins",
        photo: "https://www.onegirlwholeworld.com/wp-content/uploads/2024/04/boulders_beach_penguins_IMG_7242.jpg",
        price: 3,
        duration: 2,
        likes: 280,
        hashtags: ["#Wildlife", "#Unique", "#CapeTown"],
        city: "67411948c654461fbac95205"
    }
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