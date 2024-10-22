import "dotenv/config.js";
import '../../config/database.js';
import City from '../City.js';

const cities = [
    {
        name: "París",
        photo: "https://www.revistabrooke.com/wp-content/uploads/2021/01/portada-paris.jpg",
        country: "Francia",
        continent: "Europa",
        currency: "Euro (€)",
        description: "París es la capital de Francia, conocida como la 'Ciudad del Amor' y famosa por la Torre Eiffel, el Louvre y su gastronomía."
    },
    {
        name: "Tokio",
        photo: "https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg",
        country: "Japón",
        continent: "Asia",
        currency: "Yen japonés (¥)",
        description: "Tokio es una de las metrópolis más grandes y modernas del mundo, conocida por su tecnología, cultura pop, y templos tradicionales."
    },
    {
        name: "Nueva York",
        photo: "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg",
        country: "Estados Unidos",
        continent: "América del Norte",
        currency: "Dólar estadounidense ($)",
        description: "Nueva York es una ciudad vibrante famosa por la Estatua de la Libertad, Times Square y Wall Street, y es un centro cultural y financiero mundial."
    },
    {
        name: "Ciudad del Cabo",
        photo: "https://www.rojocangrejo.com/wp-content/uploads/sites/192/2019/01/que-ver-en-ciudad-del-cabo.jpg",
        country: "Sudáfrica",
        continent: "África",
        currency: "Rand sudafricano (R)",
        description: "Ciudad del Cabo es conocida por su mezcla de culturas, paisajes naturales espectaculares como la Montaña de la Mesa y su costa hermosa."
    },
    {
        name: "Sídney",
        photo: "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg",
        country: "Australia",
        continent: "Oceanía",
        currency: "Dólar australiano (A$)",
        description: "Sídney es famosa por su icónica Casa de la Ópera, el Puente del Puerto, y sus hermosas playas."
    },
    {
        name: "Roma",
        photo: "https://static.nationalgeographic.es/files/styles/image_3200/public/colosseum-daylight-rome-italy.jpg",
        country: "Italia",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Roma es famosa por su historia milenaria, monumentos como el Coliseo y la Ciudad del Vaticano."
    },
    {
        name: "Bangkok",
        photo: "https://viajes.nationalgeographic.com.es/medio/2023/06/28/gran-palacio-real_491caafe_1385269772_230628145613_1280x854.jpg",
        country: "Tailandia",
        continent: "Asia",
        currency: "Baht tailandés (฿)",
        description: "Bangkok es conocida por sus templos dorados, mercados flotantes y vida nocturna vibrante."
    },
    {
        name: "Río de Janeiro",
        photo: "https://elviajista.com/wp-content/uploads/2018/01/dondedormirenriodejaneiro.jpg",
        country: "Brasil",
        continent: "América del Sur",
        currency: "Real brasileño (R$)",
        description: "Río es famosa por el Cristo Redentor, el Carnaval y las playas de Copacabana e Ipanema."
    },
    {
        name: "Dubái",
        photo: "https://www.dubai.it/es/wp-content/uploads/sites/100/playas-dubai-hd.jpg",
        country: "Emiratos Árabes Unidos",
        continent: "Asia",
        currency: "Dírham (AED)",
        description: "Dubái es famosa por su arquitectura futurista, como el Burj Khalifa, y sus centros comerciales gigantes."
    },
    {
        name: "Berlín",
        photo: "https://pohcdn.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/berlin.jpg",
        country: "Alemania",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Berlín combina historia, cultura moderna y es conocida por su Muro y la Puerta de Brandeburgo."
    },
    {
        name: "San Francisco",
        photo: "https://blog.grandvoyage.com/wp-content/uploads/2024/01/OK-Golden-Gate-PORTADA.jpg",
        country: "Estados Unidos",
        continent: "América del Norte",
        currency: "Dólar estadounidense ($)",
        description: "San Francisco es famosa por el puente Golden Gate y su ambiente bohemio."
    },
    {
        name: "Buenos Aires",
        photo: "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
        country: "Argentina",
        continent: "América del Sur",
        currency: "Peso argentino (ARS)",
        description: "Buenos Aires destaca por su arquitectura europea, el tango y su gastronomía."
    },
    {
        name: "El Cairo",
        photo: "https://viajareaegipto.com/wp-content/uploads/2020/10/El-Cairo-en-Egipto.jpg",
        country: "Egipto",
        continent: "África",
        currency: "Libra egipcia (EGP)",
        description: "El Cairo es hogar de las Pirámides de Giza y la Gran Esfinge."
    },
    {
        name: "Auckland",
        photo: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
        country: "Nueva Zelanda",
        continent: "Oceanía",
        currency: "Dólar neozelandés (NZD)",
        description: "Auckland es conocida por su vibrante puerto y cercanía a paisajes naturales únicos."
    },
    {
        name: "Lisboa",
        photo: "https://tarifaserror.viajes/wp-content/uploads/2024/09/t-2024-09-21T081642.805.png",
        country: "Portugal",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Lisboa destaca por sus callejuelas empedradas, tranvías y el barrio de Alfama."
    },
    {
        name: "Seúl",
        photo: "https://colombianabroad.com/wp-content/uploads/seul-alojamiento-feature-1024x768.jpg",
        country: "Corea del Sur",
        continent: "Asia",
        currency: "Won surcoreano (₩)",
        description: "Seúl es famosa por sus palacios antiguos, rascacielos y la cultura K-pop."
    },
    {
        name: "Estambul",
        photo: "https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg",
        country: "Turquía",
        continent: "Europa y Asia",
        currency: "Lira turca (₺)",
        description: "Estambul destaca por ser un puente entre Europa y Asia, con la icónica Mezquita Azul."
    },
    {
        name: "Moscú",
        photo: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
        country: "Rusia",
        continent: "Europa",
        currency: "Rublo (₽)",
        description: "Moscú es famosa por la Plaza Roja, el Kremlin y la catedral de San Basilio."
    },
    {
        name: "Vancouver",
        photo: "https://wheatlesswanderlust.com/wp-content/uploads/2023/12/Vancouver-BC-in-the-winter-scaled.jpg",
        country: "Canadá",
        continent: "América del Norte",
        currency: "Dólar canadiense (CAD)",
        description: "Vancouver es conocida por su belleza natural y su vibrante escena cultural."
    },
    {
        name: "Madrid",
        photo: "https://madridando.com/wp-content/uploads/2018/07/gran-via-noche.jpeg",
        country: "España",
        continent: "Europa",
        currency: "Euro (€)",
        description: "Madrid es conocida por sus museos, parques y la animada vida nocturna."
    },
    {
        name: "Hanoi",
        photo: "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2023-01/shutterstock_589742027_4.jpg",
        country: "Vietnam",
        continent: "Asia",
        currency: "Dong (₫)",
        description: "Hanoi combina tradición y modernidad, destacando su casco antiguo y el lago Hoan Kiem."
    },
    {
        name: "Johannesburgo",
        photo: "https://www.fulltravel.it/wp-content/uploads/2010/03/My-Kind-of-Place-Johannesburg.jpg",
        country: "Sudáfrica",
        continent: "África",
        currency: "Rand sudafricano (R)",
        description: "Es un centro económico en Sudáfrica, conocido por su historia y museos sobre el apartheid."
    },
    {
        name: "Oslo",
        photo: "https://www.cloud-europamundo.com/img/carousel/hd/Bergen_20211129125511.jpg",
        country: "Noruega",
        continent: "Europa",
        currency: "Corona noruega (NOK)",
        description: "Oslo es conocida por sus museos, espacios verdes y cercanía a los fiordos noruegos."
    },
    {
        name: "Lima",
        photo: "https://www.peru.travel/Contenido/Noticia/Imagen/es/1923/1.0/Principal/plaza-de-armas-lima-desktop.jpg",
        country: "Perú",
        continent: "América del Sur",
        currency: "Sol peruano (PEN)",
        description: "Lima es conocida por su gastronomía y su mezcla de arquitectura colonial y moderna."
    },
    {
        name: "Reikiavik",
        photo: "https://content.r9cdn.net/rimg/dimg/f2/50/76faf4b0-city-11024-556f15e0.jpg",
        country: "Islandia",
        continent: "Europa",
        currency: "Corona islandesa (ISK)",
        description: "Reikiavik es la capital más septentrional del mundo, famosa por sus paisajes naturales y auroras boreales."
    },
    {
        name: "Cali",
        photo: "https://www.turismauro.com/wp-content/uploads/2020/08/cristo-rey_cali-scaled.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Cali es conocida como la 'Capital Mundial de la Salsa', famosa por su música, festivales y ambiente cálido."
    },
    {
        name: "Medellín",
        photo: "https://cdn.forbes.co/2020/09/Medell%C3%ADn-foto-ProColombia.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Medellín, la 'Ciudad de la Eterna Primavera', es conocida por su clima templado, innovación y el Festival de las Flores."
    },
    {
        name: "Bogotá",
        photo: "https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Bogotá, la capital de Colombia, es el corazón cultural y económico del país, con museos como el Museo del Oro y el barrio de La Candelaria."
    },
    {
        name: "Cartagena",
        photo: "https://www.esariri.com/wp-content/uploads/2022/09/Cartagena-scaled.jpg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "Cartagena es famosa por su ciudad amurallada, playas caribeñas y arquitectura colonial."
    },
    {
        name: "San Andrés",
        photo: "https://www.procuraduria.gov.co/PublishingImages/48731E80-29DD-4A39-9E61-D23C4D8CD804.jpeg",
        country: "Colombia",
        continent: "América del Sur",
        currency: "Peso colombiano (COP)",
        description: "San Andrés es una isla paradisíaca en el Caribe, conocida por su mar de siete colores y la Reserva de la Biosfera Seaflower."
    }];

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