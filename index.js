const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const exercises = [
    {
    title: 'Press de pecho en máquina',
    desc: 'Trabaja los músculos pectorales, tríceps y deltoides. Siéntate en la máquina y empuja las manijas hacia adelante hasta '+
    'que los brazos estén completamente extendidos.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/press-pectoral-en-maquina-sentado-init-pos-1729.png'
    },
    {
    title: 'Prensa de piernas',
    desc: 'Trabaja los músculos cuádriceps, glúteos y pantorrillas. Siéntate en la máquina y empuja la plataforma con los pies hasta '+
    'que las piernas estén extendidas.',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/017/582/392/small/woman-doing-leg-press-exercise-on-machine-flat-illustration-isolated-on-white-background-vector.jpg'
    },
    {
    title: 'Polea alta para dorsales',
    desc: 'Trabaja la espalda, específicamente el dorsal ancho. Siéntate y tira de la barra hacia abajo hasta que toque la parte superior '+
    'del pecho.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/jalon-dorsal-con-polea-alta-y-agarre-cerrado-init-pos-4338.png'
    },
    {
    title: 'Curl de piernas en máquina',
    desc: 'Trabaja los isquiotibiales. Acuéstate boca abajo en la máquina y flexiona las piernas hacia los glúteos tirando de la '+
    'almohadilla.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/curl-femoral-con-maquina-init-pos-8742.png'
    },
    {
    title: 'Extensiones de piernas en máquina',
    desc: 'Trabaja los cuádriceps. Siéntate en la máquina y extiende las piernas hacia adelante levantando el peso.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/extension-de-piernas-en-maquina-init-pos-7748.png'
    },
    {
    title: 'Remo en máquina',
    desc: 'Trabaja la espalda y los bíceps. Siéntate y tira de las manijas hacia tu torso, manteniendo la espalda recta.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/remo-con-agarre-cerrado-sentado-en-maquina-init-pos-1840.png'
    },
    {
    title: 'Press de hombros en máquina',
    desc: 'Trabaja los deltoides y los tríceps. Empuja las manijas hacia arriba desde la altura de los hombros hasta que los brazos '+
    'estén completamente extendidos.',
    img: 'https://i.pinimg.com/originals/6e/2f/bc/6e2fbc0d2740c505a3a66c6728078371.png'
    },
    {
    title: 'Aducción de cadera en máquina',
    desc: 'Trabaja los músculos de la parte interna del muslo. Siéntate en la máquina y junta las piernas contra la resistencia de la '+
    'máquina.',
    img: 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/adduccion-de-cadera-en-maquina-sentado-init-pos-8169.png'
    }];

const foods = [
    {
    img:'https://sabrosano.com/wp-content/uploads/2020/07/pechuga-rellena-espinacas-4.jpg',
    name: "Pechuga de pollo cocida",
    calories: 165,
    protein: 31,
    fat: 3.6
    },
    {
    img:'https://www.paulinacocina.net/wp-content/uploads/2022/07/receta-de-salmon-a-la-plancha-con-salsa-agridulce.jpg',
    name: "Salmon cocido",
    calories: 206,
    protein: 22,
    fat: 13
    },
    {
    img:'https://i.blogs.es/c0d938/quinoa-cocida/650_1200.jpg',
    name: "Quinoa cocida",
    calories: 120,
    protein: 4.1,
    fat: 1.9
    },
    {
    img:'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/07/02/5e997e0d70285.jpeg',
    name: "Espinaca cocida",
    calories: 23,
    protein: 2.9,
    fat: 0.4
    },
    {
    img:'https://cdn-redagricola.s3-accelerate.amazonaws.com/2024/04/PALTA-1-scaled.jpg',
    name: "Palta",
    calories: 160,
    protein: 2,
    fat: 15
    },
    {
    img:'https://www.diet-health.info/images/recipes/main_view/linsen-kuechen-linsen-lentils-cooked-by-ppi09-fotolia-41057111.jpg',
    name: "Lentejas cocidas",
    calories: 116,
    protein: 9,
    fat: 0.4
    },
    {
    img:'https://www.recetasnestle.cl/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/Main-Banner-Desktop-1200x384.jpg?itok=zxdmYVKT',
    name: "Manzana",
    calories: 52,
    protein: 0.3,
    fat: 0.2
    },
    {
    img:'https://s1.elespanol.com/2021/11/19/ciencia/nutricion/628450440_215522646_1024x576.jpg',
    name: "Yogurt natural",
    calories: 59,
    protein: 10,
    fat: 0.4
    },
    {
    img:'https://s2.abcstatics.com/media/bienestar/2019/07/24/nueces-ks6F--1248x698@abc.jpg',
    name: "Nueces",
    calories: 654,
    protein: 15,
    fat: 65
    },
    {
    img:'https://www.telemadrid.es/2023/09/25/salud/_2600150061_42858765_1300x731.jpg',
    name: "Papa cocida",
    calories: 86,
    protein: 1.6,
    fat: 0.1
    },
    {
    img:'https://imag.bonviveur.com/presentacion-final-del-brocoli-cocido.jpg',
    name: "Brocoli cocido",
    calories: 55,
    protein: 3.7,
    fat: 0.6
    },
    {
    img:'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Hard-Boiled-Eggs-shutterstock_451345444.jpg',
    name: "Huevo cocido",
    calories: 155,
    protein: 13,
    fat: 11
    },
    {
    img:'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/604204064a61a.jpeg',
    name: "Almendras",
    calories: 579,
    protein: 21,
    fat: 49
    },
    {
    img:'https://www.hola.com/horizon/landscape/ec0d025fe8bc-tomate-t.jpg',
    name: "Tomate",
    calories: 18,
    protein: 0.9,
    fat: 0.2
    },
    {
    img:'https://content.cuerpomente.com/medio/2024/05/28/pera_8ea4bd9a_240528181735_1200x630.jpg',
    name: "Pera",
    calories: 39,
    protein: 0.4,
    fat: 0.1
    }];

app.get('/', (req, res) => {
    res.send('Node JS Api')
})

app.get('/api/exercises', (req, res) => {
    res.send(exercises);

})

app.get('/api/foods', (req, res) => {
    res.send(foods);

})

const port = process.env.port || 80;
app.listen(port, () => console.log('Puerto utilizado '+port));
