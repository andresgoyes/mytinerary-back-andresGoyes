import "dotenv/config.js";
import '../../config/database.js';
import City from '../City.js';

const cities = [
    {
        name: "París",
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
        country: "Francia",
        continent: "Europa",
        currency: "Euro (€)",
        description: "París es la capital de Francia, conocida como la 'Ciudad del Amor' y famosa por la Torre Eiffel, el Louvre y su gastronomía."
    },
    {
        name: "Tokio",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Night_view_of_Shinjuku.jpg",
        country: "Japón",
        continent: "Asia",
        currency: "Yen japonés (¥)",
        description: "Tokio es una de las metrópolis más grandes y modernas del mundo, conocida por su tecnología, cultura pop, y templos tradicionales."
    },
    {
        name: "Nueva York",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/New_York_City_at_night_HDR.jpg",
        country: "Estados Unidos",
        continent: "América del Norte",
        currency: "Dólar estadounidense ($)",
        description: "Nueva York es una ciudad vibrante famosa por la Estatua de la Libertad, Times Square y Wall Street, y es un centro cultural y financiero mundial."
    },
    {
        name: "Ciudad del Cabo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Cape_Town_CBD_and_Harbour.jpg",
        country: "Sudáfrica",
        continent: "África",
        currency: "Rand sudafricano (R)",
        description: "Ciudad del Cabo es conocida por su mezcla de culturas, paisajes naturales espectaculares como la Montaña de la Mesa y su costa hermosa."
    },
    {
        name: "Sídney",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sydney_Opera_House_Closeup.jpg",
        country: "Australia",
        continent: "Oceanía",
        currency: "Dólar australiano (A$)",
        description: "Sídney es famosa por su icónica Casa de la Ópera, el Puente del Puerto, y sus hermosas playas."
    },
    {
        name: "Roma",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        country: "Italia",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Roma es famosa por su historia milenaria, monumentos como el Coliseo y la Ciudad del Vaticano."
    },
    {
        name: "Bangkok",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bangkok_skyline_from_Golden_Mount.jpg",
        country: "Tailandia",
        continent: "Asia",
        currency: "Baht tailandés (฿)",
        description: "Bangkok es conocida por sus templos dorados, mercados flotantes y vida nocturna vibrante."
    },
    {
        name: "Río de Janeiro",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Rio_de_Janeiro_Brazil.jpg",
        country: "Brasil",
        continent: "América del Sur",
        currency: "Real brasileño (R$)",
        description: "Río es famosa por el Cristo Redentor, el Carnaval y las playas de Copacabana e Ipanema."
    },
    {
        name: "Dubái",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dubai_skyline_at_night.jpg",
        country: "Emiratos Árabes Unidos",
        continent: "Asia",
        currency: "Dírham (AED)",
        description: "Dubái es famosa por su arquitectura futurista, como el Burj Khalifa, y sus centros comerciales gigantes."
    },
    {
        name: "Berlín",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Berlin_Brandenburg_Gate_Night.jpg",
        country: "Alemania",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Berlín combina historia, cultura moderna y es conocida por su Muro y la Puerta de Brandeburgo."
    },
    {
        name: "San Francisco",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/af/GoldenGateBridge-001.jpg",
        country: "Estados Unidos",
        continent: "América del Norte",
        currency: "Dólar estadounidense ($)",
        description: "San Francisco es famosa por el puente Golden Gate y su ambiente bohemio."
    },
    {
        name: "Buenos Aires",
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Buenos_Aires_Microcentro.jpg",
        country: "Argentina",
        continent: "América del Sur",
        currency: "Peso argentino (ARS)",
        description: "Buenos Aires destaca por su arquitectura europea, el tango y su gastronomía."
    },
    {
        name: "El Cairo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Great_Sphinx_and_Pyramid_of_Khafre.jpg",
        country: "Egipto",
        continent: "África",
        currency: "Libra egipcia (EGP)",
        description: "El Cairo es hogar de las Pirámides de Giza y la Gran Esfinge."
    },
    {
        name: "Auckland",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Auckland_skyline.jpg",
        country: "Nueva Zelanda",
        continent: "Oceanía",
        currency: "Dólar neozelandés (NZD)",
        description: "Auckland es conocida por su vibrante puerto y cercanía a paisajes naturales únicos."
    },
    {
        name: "Lisboa",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Lisbon_sunset.jpg",
        country: "Portugal",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Lisboa destaca por sus callejuelas empedradas, tranvías y el barrio de Alfama."
    },
    {
        name: "Seúl",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Seoul_skyline.jpg",
        country: "Corea del Sur",
        continent: "Asia",
        currency: "Won surcoreano (₩)",
        description: "Seúl es famosa por sus palacios antiguos, rascacielos y la cultura K-pop."
    },
    {
        name: "Estambul",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Istanbul_sunset.jpg",
        country: "Turquía",
        continent: "Europa y Asia",
        currency: "Lira turca (₺)",
        description: "Estambul destaca por ser un puente entre Europa y Asia, con la icónica Mezquita Azul."
    },
    {
        name: "Moscú",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/RedSquare_Moscow.jpg",
        country: "Rusia",
        continent: "Europa",
        currency: "Rublo (₽)",
        description: "Moscú es famosa por la Plaza Roja, el Kremlin y la catedral de San Basilio."
    },
    {
        name: "Vancouver",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Vancouver_skyline.jpg",
        country: "Canadá",
        continent: "América del Norte",
        currency: "Dólar canadiense (CAD)",
        description: "Vancouver es conocida por su belleza natural y su vibrante escena cultural."
    },
    {
        name: "Madrid",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Plaza_Mayor_de_Madrid.jpg",
        country: "España",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Madrid es conocida por sus museos, parques y la animada vida nocturna."
    },
    {
        name: "Hanoi",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Hanoi_Opera_House.jpg",
        country: "Vietnam",
        continent: "Asia",
        currency: "Dong (₫)",
        description: "Hanoi combina tradición y modernidad, destacando su casco antiguo y el lago Hoan Kiem."
    },
    {
        name: "Johannesburgo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Johannesburg_skyline.jpg",
        country: "Sudáfrica",
        continent: "África",
        currency: "Rand sudafricano (R)",
        description: "Es un centro económico en Sudáfrica, conocido por su historia y museos sobre el apartheid."
    },
    {
        name: "Oslo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Oslo_skyline.jpg",
        country: "Noruega",
        continent: "Europa",
        currency: "Corona noruega (NOK)",
        description: "Oslo es conocida por sus museos, espacios verdes y cercanía a los fiordos noruegos."
    },
    {
        name: "Lima",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Lima_downtown.jpg",
        country: "Perú",
        continent: "América del Sur",
        currency: "Sol peruano (PEN)",
        description: "Lima es conocida por su gastronomía y su mezcla de arquitectura colonial y moderna."
    },
    {
        name: "Reikiavik",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Reykjavik_view.jpg",
        country: "Islandia",
        continent: "Europa",
        currency: "Corona islandesa (ISK)",
        description: "Reikiavik es la capital más septentrional del mundo, famosa por sus paisajes naturales y auroras boreales."
    },
    {
        name: "Cali",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cali_panorama.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Cali es conocida como la 'Capital Mundial de la Salsa', famosa por su música, festivales y ambiente cálido."
    },
    {
        name: "Medellín",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Medellin_skyline.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Medellín, la 'Ciudad de la Eterna Primavera', es conocida por su clima templado, innovación y el Festival de las Flores."
    },
    {
        name: "Bogotá",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Bogota_downtown.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Bogotá, la capital de Colombia, es el corazón cultural y económico del país, con museos como el Museo del Oro y el barrio de La Candelaria."
    },
    {
        name: "Cartagena",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cartagena_de_Indias_view.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Cartagena es famosa por su ciudad amurallada, playas caribeñas y arquitectura colonial."
    },
    {
        name: "San Andrés",
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/San_Andres_Island_view.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "San Andrés es una isla paradisíaca en el Caribe, conocida por su mar de siete colores y la Reserva de la Biosfera Seaflower."
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