import "dotenv/config.js";
import '../../config/database.js';
import City from '../City.js';

const cities = [
    {
        name: "Paris",
        photo: "https://www.revistabrooke.com/wp-content/uploads/2021/01/portada-paris.jpg",
        country: "France",
        continent: "Europe",
        currency: "Euro (€)",
        description: "Paris is the capital of France, known as the 'City of Love' and famous for the Eiffel Tower, the Louvre, and its cuisine."
    },
    {
        name: "Tokyo",
        photo: "https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg",
        country: "Japan",
        continent: "Asia",
        currency: "Japanese Yen (¥)",
        description: "Tokyo is one of the largest and most modern metropolises in the world, known for its technology, pop culture, and traditional temples."
    },
    {
        name: "New York",
        photo: "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg",
        country: "United States",
        continent: "North America",
        currency: "US Dollar ($)",
        description: "New York is a vibrant city famous for the Statue of Liberty, Times Square, and Wall Street, and is a global cultural and financial hub."
    },
    {
        name: "Cape Town",
        photo: "https://www.rojocangrejo.com/wp-content/uploads/sites/192/2019/01/que-ver-en-ciudad-del-cabo.jpg",
        country: "South Africa",
        continent: "Africa",
        currency: "South African Rand (R)",
        description: "Cape Town is known for its blend of cultures, stunning natural landscapes like Table Mountain, and its beautiful coastline."
    },
    {
        name: "Sydney",
        photo: "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg",
        country: "Australia",
        continent: "Oceania",
        currency: "Australian Dollar (A$)",
        description: "Sydney is famous for its iconic Opera House, Harbour Bridge, and beautiful beaches."
    },
    {
        name: "Rome",
        photo: "https://static.nationalgeographic.es/files/styles/image_3200/public/colosseum-daylight-rome-italy.jpg",
        country: "Italy",
        continent: "Europe",
        currency: "Euro (€)",
        description: "Rome is famous for its ancient history, monuments like the Colosseum and the Vatican City."
    },
    {
        name: "Bangkok",
        photo: "https://viajes.nationalgeographic.com.es/medio/2023/06/28/gran-palacio-real_491caafe_1385269772_230628145613_1280x854.jpg",
        country: "Thailand",
        continent: "Asia",
        currency: "Thai Baht (฿)",
        description: "Bangkok is known for its golden temples, floating markets, and vibrant nightlife."
    },
    {
        name: "Rio de Janeiro",
        photo: "https://elviajista.com/wp-content/uploads/2018/01/dondedormirenriodejaneiro.jpg",
        country: "Brazil",
        continent: "South America",
        currency: "Brazilian Real (R$)",
        description: "Rio is famous for Christ the Redeemer, Carnival, and the beaches of Copacabana and Ipanema."
    },
    {
        name: "Dubai",
        photo: "https://www.dubai.it/es/wp-content/uploads/sites/100/playas-dubai-hd.jpg",
        country: "United Arab Emirates",
        continent: "Asia",
        currency: "Dirham (AED)",
        description: "Dubai is famous for its futuristic architecture, like the Burj Khalifa, and its giant shopping malls."
    },
    {
        name: "Berlin",
        photo: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/berlin.jpg",
        country: "Germany",
        continent: "Europe",
        currency: "Euro (€)",
        description: "Berlin combines history and modern culture and is known for its Wall and Brandenburg Gate."
    },
    {
        name: "San Francisco",
        photo: "https://blog.grandvoyage.com/wp-content/uploads/2024/01/OK-Golden-Gate-PORTADA.jpg",
        country: "United States",
        continent: "North America",
        currency: "US Dollar ($)",
        description: "San Francisco is famous for the Golden Gate Bridge and its bohemian atmosphere."
    },
    {
        name: "Buenos Aires",
        photo: "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
        country: "Argentina",
        continent: "South America",
        currency: "Argentine Peso (ARS)",
        description: "Buenos Aires is known for its European architecture, tango, and gastronomy."
    },
    {
        name: "Cairo",
        photo: "https://viajareaegipto.com/wp-content/uploads/2020/10/El-Cairo-en-Egipto.jpg",
        country: "Egypt",
        continent: "Africa",
        currency: "Egyptian Pound (EGP)",
        description: "Cairo is home to the Pyramids of Giza and the Great Sphinx."
    },
    {
        name: "Auckland",
        photo: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
        country: "New Zealand",
        continent: "Oceania",
        currency: "New Zealand Dollar (NZD)",
        description: "Auckland is known for its vibrant harbor and proximity to unique natural landscapes."
    },
    {
        name: "Lisboa",
        photo: "https://tarifaserror.viajes/wp-content/uploads/2024/09/t-2024-09-21T081642.805.png",
        country: "Portugal",
        continent: "Europe",
        currency: "Euro (€)",
        description: "Lisboa is known for its cobbled streets, trams, and the Alfama district."
    },
    {
        name: "Seoul",
        photo: "https://colombianabroad.com/wp-content/uploads/seul-alojamiento-feature-1024x768.jpg",
        country: "South Korea",
        continent: "Asia",
        currency: "South Korean Won (₩)",
        description: "Seoul is famous for its ancient palaces, skyscrapers, and K-pop culture."
    },
    {
        name: "Istanbul",
        photo: "https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg",
        country: "Turkey",
        continent: "Europe and Asia",
        currency: "Turkish Lira (₺)",
        description: "Istanbul is known for being a bridge between Europe and Asia, with the iconic Blue Mosque."
    },
    {
        name: "Moscow",
        photo: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
        country: "Russia",
        continent: "Europe",
        currency: "Ruble (₽)",
        description: "Moscow is famous for Red Square, the Kremlin, and St. Basil's Cathedral."
    },
    {
        name: "Vancouver",
        photo: "https://wheatlesswanderlust.com/wp-content/uploads/2023/12/Vancouver-BC-in-the-winter-scaled.jpg",
        country: "Canada",
        continent: "North America",
        currency: "Canadian Dollar (CAD)",
        description: "Vancouver is known for its natural beauty and vibrant cultural scene."
    },
    {
        name: "Madrid",
        photo: "https://madridando.com/wp-content/uploads/2018/07/gran-via-noche.jpeg",
        country: "Spain",
        continent: "Europe",
        currency: "Euro (€)",
        description: "Madrid is known for its museums, parks, and lively nightlife."
    },
    {
        name: "Hanoi",
        photo: "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2023-01/shutterstock_589742027_4.jpg",
        country: "Vietnam",
        continent: "Asia",
        currency: "Dong (₫)",
        description: "Hanoi combines tradition and modernity, featuring its old quarter and Hoan Kiem Lake."
    },
    {
        name: "Johannesburg",
        photo: "https://www.fulltravel.it/wp-content/uploads/2010/03/My-Kind-of-Place-Johannesburg.jpg",
        country: "South Africa",
        continent: "Africa",
        currency: "South African Rand (R)",
        description: "It is an economic center in South Africa, known for its history and museums about apartheid."
    },
    {
        name: "Oslo",
        photo: "https://www.cloud-europamundo.com/img/carousel/hd/Bergen_20211129125511.jpg",
        country: "Norway",
        continent: "Europe",
        currency: "Norwegian Krone (NOK)",
        description: "Oslo is known for its museums, green spaces, and proximity to Norwegian fjords."
    },
    {
        name: "Lima",
        photo: "https://www.peru.travel/Contenido/Noticia/Imagen/es/1923/1.0/Principal/plaza-de-armas-lima-desktop.jpg",
        country: "Peru",
        continent: "South America",
        currency: "Peruvian Sol (PEN)",
        description: "Lima is known for its gastronomy and its mix of colonial and modern architecture."
    },
    {
        name: "Reykjavik",
        photo: "https://content.r9cdn.net/rimg/dimg/f2/50/76faf4b0-city-11024-556f15e0.jpg",
        country: "Iceland",
        continent: "Europe",
        currency: "Icelandic Króna (ISK)",
        description: "Reykjavik is the world's northernmost capital, famous for its natural landscapes and northern lights."
    },
    {
        name: "Cali",
        photo: "https://www.turismauro.com/wp-content/uploads/2020/08/cristo-rey_cali-scaled.jpg",
        country: "Colombia",
        continent: "South America",
        currency: "Colombian Peso (COP)",
        description: "Cali is known as the 'World Capital of Salsa', famous for its music, festivals, and warm atmosphere."
    },
    {
        name: "Medellin",
        photo: "https://cdn.forbes.co/2020/09/Medell%C3%ADn-foto-ProColombia.jpg",
        country: "Colombia",
        continent: "South America",
        currency: "Colombian Peso (COP)",
        description: "Medellin, the 'City of Eternal Spring', is known for its mild climate, innovation, and the Flower Festival."
    },
    {
        name: "Bogota",
        photo: "https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg",
        country: "Colombia",
        continent: "South America",
        currency: "Colombian Peso (COP)",
        description: "Bogotá, the capital of Colombia, is the cultural and economic heart of the country, with museums like the Gold Museum and the La Candelaria neighborhood."
    },
    {
        name: "Cartagena",
        photo: "https://www.esariri.com/wp-content/uploads/2022/09/Cartagena-scaled.jpg",
        country: "Colombia",
        continent: "South America",
        currency: "Colombian Peso (COP)",
        description: "Cartagena is famous for its walled city, Caribbean beaches, and colonial architecture."
    },
    {
        name: "San Andres",
        photo: "https://www.procuraduria.gov.co/PublishingImages/48731E80-29DD-4A39-9E61-D23C4D8CD804.jpeg",
        country: "Colombia",
        continent: "South America",
        currency: "Colombian Peso (COP)",
        description: "San Andrés is a paradise island in the Caribbean, known for its seven-colored sea and the Seaflower Biosphere Reserve."
    }
];

console.log(cities);

City.insertMany(cities)
    .then(() => {
        console.log("Cities inserted successfully ");
        process.exit();
    })
    .catch(error => {
        console.log("Error inserting cities: ", error);
        process.exit(1);
    });