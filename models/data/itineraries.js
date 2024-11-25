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
    },
    {
        creator: "Emily Parker",
        creatorPhoto: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Harbour Bridge Adventure",
        photo: "https://www.rtwbackpackers.com/wp-content/uploads/2016/09/sydney-harbour-bridge-climb-tour-australia-east-coast-1.jpg",
        price: 5,
        duration: 4,
        likes: 350,
        hashtags: ["#Landmarks", "#Sydney", "#Architecture"],
        city: "67411948c654461fbac95206"
    },
    {
        creator: "Sophia Johnson",
        creatorPhoto: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Bondi Beach Surfing Experience",
        photo: "https://worldoftravelswithkids.com/wp-content/uploads/2021/01/shutterstock_251986318-bondi-beach-e1634105714450.jpg",
        price: 4,
        duration: 3,
        likes: 420,
        hashtags: ["#Beach", "#Surfing", "#Adventure"],
        city: "67411948c654461fbac95206"
    },
    {
        creator: "Olivia Martinez",
        creatorPhoto: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Royal Botanic Gardens Walk",
        photo: "https://cdn.prod.website-files.com/5f0054a24c8ac612342795a3/5f07c609393b506e89896e72_hero.jpg",
        price: 2,
        duration: 2,
        likes: 310,
        hashtags: ["#Nature", "#Relaxation", "#Sydney"],
        city: "67411948c654461fbac95206"
    },
    {
        creator: "Isabella Rossi",
        creatorPhoto: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Colosseum Tour",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/04/2d.jpg",
        price: 4,
        duration: 3,
        likes: 500,
        hashtags: ["#History", "#Landmarks", "#Rome"],
        city: "67411948c654461fbac95207"
    },
    {
        creator: "Giulia Romano",
        creatorPhoto: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Vatican Museums Tour",
        photo: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/ba/c1/d8.jpg",
        price: 5,
        duration: 4,
        likes: 620,
        hashtags: ["#Art", "#Culture", "#Vatican"],
        city: "67411948c654461fbac95207"
    },
    {
        creator: "Ananya Chaiyaphum",
        creatorPhoto: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Grand Palace Exploration",
        photo: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fa/e1/ce.jpg",
        price: 3,
        duration: 3,
        likes: 450,
        hashtags: ["#Culture", "#History", "#Bangkok"],
        city: "67411948c654461fbac95208"
    },
    {
        creator: "Nalini Somsri",
        creatorPhoto: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Floating Market Tour",
        photo: "https://www.bangkokfoodtours.com/wp-content/themes/bft_v2-theme/img/tours/floating/floatingmarket-highlight02.jpg",
        price: 2,
        duration: 2,
        likes: 520,
        hashtags: ["#Food", "#LocalExperience", "#Bangkok"],
        city: "67411948c654461fbac95208"
    },
    {
        creator: "Fernanda Souza",
        creatorPhoto: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Christ the Redeemer",
        photo: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/ce/56/b7.jpg",
        price: 5,
        duration: 4,
        likes: 600,
        hashtags: ["#Landmarks", "#Views", "#RioDeJaneiro"],
        city: "67411948c654461fbac95209"
    },
    {
        creator: "Carolina Oliveira",
        creatorPhoto: "https://randomuser.me/api/portraits/women/9.jpg",
        name: "Copacabana Beach Experience",
        photo: "https://cdn.bookelevent.com/_default_upload_bucket/13459/image-thumb__13459__product_detail/rio_de_janeiro_1963744_1280.3f8f93ed.jpg",
        price: 3,
        duration: 3,
        likes: 480,
        hashtags: ["#Beach", "#Relaxation", "#Brazil"],
        city: "67411948c654461fbac95209"
    },
    {
        creator: "Gabriela Lima",
        creatorPhoto: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Tijuca National Park Hiking Adventure",
        photo: "https://jungleme.com.br/wp-content/uploads/FAM-K-750x500-Tijuca-Forest-easy-hike-2.jpg",
        price: 4,
        duration: 5,
        likes: 530,
        hashtags: ["#Nature", "#Hiking", "#Adventure"],
        city: "67411948c654461fbac95209"
    },
    {
        creator: "Aaliyah Khan",
        creatorPhoto: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Burj Khalifa Experience",
        photo: "https://framerusercontent.com/images/u5J4DXC3YAvWZUrOD9BdXT8IxU.jpg",
        price: 5,
        duration: 4,
        likes: 700,
        hashtags: ["#Landmarks", "#Luxury", "#Dubai"],
        city: "67411948c654461fbac9520a"
    },
    {
        creator: "Omar Al-Farooq",
        creatorPhoto: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Desert Safari and Camel Ride",
        photo: "https://desertleapsafari.com/wp-content/uploads/2023/04/Camel-Desert-Safari-Dubai.webp",
        price: 4,
        duration: 5,
        likes: 620,
        hashtags: ["#Adventure", "#Desert", "#Dubai"],
        city: "67411948c654461fbac9520a"
    },
    {
        creator: "Anna Müller",
        creatorPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Berlin Wall and East Side Gallery Tour",
        photo: "https://media.cntraveler.com/photos/5bd0d081a480f70a5952c272/master/pass/East%20Side%20Gallery_CTABWA.jpg",
        price: 3,
        duration: 3,
        likes: 450,
        hashtags: ["#History", "#Art", "#Berlin"],
        city: "67411948c654461fbac9520b"
    },
    {
        creator: "Lukas Schneider",
        creatorPhoto: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "Brandenburg Gate and Museum Island",
        photo: "https://ciowomenmagazine.com/wp-content/uploads/2024/03/1.2.Museum-Island.jpg",
        price: 5,
        duration: 4,
        likes: 520,
        hashtags: ["#Culture", "#Landmarks", "#Berlin"],
        city: "67411948c654461fbac9520b"
    },
    {
        creator: "Sophia Johnson",
        creatorPhoto: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "Golden Gate Bridge and Alcatraz Island",
        photo: "https://images.hornblower.com/1200x840/images/tours/hacco/24dfee1f-5e01-402f-bef0-69333075f978.jpeg",
        price: 5,
        duration: 4,
        likes: 600,
        hashtags: ["#Landmarks", "#Views", "#SanFrancisco"],
        city: "67411948c654461fbac9520c"
    },
    {
        creator: "Michael Brown",
        creatorPhoto: "https://randomuser.me/api/portraits/men/55.jpg",
        name: "Cable Cars and Fisherman's Wharf",
        photo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTlIGOK8xkJsPxeSth-SGSSPttxbCnvozHlRsLz34pSHazxKe6KXnTaNTf3A66lRK_CQPQMcR5R_3phqUnKfbZoiUxT1fLg4igCzdO1rLcyNZXpzawjQ0KeT2rJQ7MfjBX_iygZSEO9iM/s1600/DSC_0025.JPG",
        price: 4,
        duration: 3,
        likes: 520,
        hashtags: ["#Heritage", "#Food", "#SanFrancisco"],
        city: "67411948c654461fbac9520c"
    },
    {
        creator: "Emma Wilson",
        creatorPhoto: "https://randomuser.me/api/portraits/women/56.jpg",
        name: "Exploratorium and Pier 39 Fun",
        photo: "https://res.cloudinary.com/simpleview/image/upload/v1619822903/clients/fishermanswharfca/shutterstock_730404997_9bdf34ca-fdb5-4cfc-bc8c-5bc4c2d995c2.jpg",
        price: 3,
        duration: 2,
        likes: 450,
        hashtags: ["#Family", "#Fun", "#SanFrancisco"],
        city: "67411948c654461fbac9520c"
    },
    {
        creator: "Camila Fernández",
        creatorPhoto: "https://randomuser.me/api/portraits/women/57.jpg",
        name: "Recoleta Cemetery and Palermo Walk",
        photo: "https://media.tacdn.com/media/photo-m/1280/2e/12/c9/ea/caption.jpg",
        price: 3,
        duration: 3,
        likes: 410,
        hashtags: ["#History", "#Architecture", "#BuenosAires"],
        city: "67411948c654461fbac9520d"
    },
    {
        creator: "Joaquín Díaz",
        creatorPhoto: "https://randomuser.me/api/portraits/men/56.jpg",
        name: "Tango Show and San Telmo Market",
        photo: "https://solsalute.com/wp-content/uploads/2023/03/Depositphotos_381417286_S-1.jpg",
        price: 4,
        duration: 4,
        likes: 480,
        hashtags: ["#Culture", "#Dance", "#BuenosAires"],
        city: "67411948c654461fbac9520d"
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