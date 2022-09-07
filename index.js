const express = require('express')
var path = require('path');
const app = express();
const port = 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.get('/',function (req, res) {
    res.render('pages/home')
});
app.get('/adele',function (req, res) {
    res.render('pages/adele')
    });
    app.get('/spotify20',function (req, res) {
        res.render('pages/spotify20')
        });
    app.get('/otan',function (req, res) {
            res.render('pages/otan')
        });
    app.get('/oscar',function (req, res) {
            res.render('pages/oscar')
        });
    app.get('/ayuso',function (req, res) {
            res.render('pages/ayuso')
        });
    app.get('/embalses',function (req, res) {
            res.render('pages/embalses')
        });
    app.get('/alquiler',function (req, res) {
            res.render('pages/alquiler')
        });
    app.get('/despoblacion',function (req, res) {
            res.render('pages/despoblacion')
        });
    app.get('/ucrania',function (req, res) {
            res.render('pages/ucrania')
        });
    app.get('/cristal',function (req, res) {
            res.render('pages/cristal')
        });
    app.get('/contacto',function (req, res) {
            res.render('pages/contacto')
        });
    app.get('/proyectoi',function (req, res) {
            res.render('pages/proyectoi')
        });
    app.get('/proyectoii',function (req, res) {
            res.render('pages/proyectoii')
        });
    app.get('/proyectoiii',function (req, res) {
            res.render('pages/proyectoiii')
        });
    app.get('/proyectoiv',function (req, res) {
            res.render('pages/proyectoiv')
        });    
    app.get('/proyectov',function (req, res) {
            res.render('pages/proyectov')
        });
    app.get('/proyectovi',function (req, res) {
            res.render('pages/proyectovi')
        });
    app.get('/proyectovii',function (req, res) {
            res.render('pages/proyectovii')
        });
    app.get('/proyectoviii',function (req, res) {
            res.render('pages/proyectoviii')
        });
    app.get('/proyectoix',function (req, res) {
            res.render('pages/proyectoix')
        });
    app.get('/proyectox',function (req, res) {
            res.render('pages/proyectox')
        });
    app.get('/sobremi',function (req, res) {
            res.render('pages/sobremi')
        });
    app.get('/home_english',function (req, res) {
            res.render('pages/home_english')
        });
    app.get('/about',function (req, res) {
            res.render('pages/about')
        });
    app.get('/contact',function (req, res) {
            res.render('pages/contact')
        });
    app.get('/projecti',function (req, res) {
            res.render('pages/projecti')
        });
    app.get('/projectii',function (req, res) {
            res.render('pages/projectii')
        });
    app.get('/projectiii',function (req, res) {
            res.render('pages/projectiii')
        });
    app.get('/projectiv',function (req, res) {
            res.render('pages/projectiv')
        });
    app.get('/projectv',function (req, res) {
            res.render('pages/projectv')
        });
    app.get('/projectvi',function (req, res) {
            res.render('pages/projectvi')
        });
    app.get('/projectvii',function (req, res) {
            res.render('pages/projectvii')
        });
    app.get('/projectviii',function (req, res) {
            res.render('pages/projectviii')
        });
    app.get('/projectix',function (req, res) {
            res.render('pages/projectix')
        });
    app.get('/projectx',function (req, res) {
            res.render('pages/projectx')
        });

 









    


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));