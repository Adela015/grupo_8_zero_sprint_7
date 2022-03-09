//REQUIRES
const express = require('express');
const app = express();
const path = require('path');
// const router = express.Router();
const methodOverride  = require("method-override");
const mainController = require('./src/controllers/mainController');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
const session = require('express-session');
const cookie = require('cookie-parser');


const port = 3003;


//RUTAS
const mainRutas = require('./src/routers/mainRouter');
const productRutas = require('./src/routers/productRouter');
const userRutas = require('./src/routers/userRouter');

//EXPRESS
app.use(express.static('public'));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: 'maktamo', saveUninitialized: true, resave: false}));
app.use(cookie());
app.use(userLoggedMiddleware);


//METHOD OVERRIDE
app.use(methodOverride("_method"));


app.listen(process.env.PORT ||port, () => console.log(`Servidor funcionando en el puerto ${port}! <3`));


// --------------------------------- RUTAS -------------------------------- //

app.use('/', mainRutas);
app.use('/products',productRutas);
app.use('/user', userRutas);

//ERROR 404 : siempre tiene que ir al final, si no es lo unico que muestra la pagina
app.use((req, res, next) => {
    res.status(404).render('error404')
});
