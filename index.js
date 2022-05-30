const { response } = require('express');
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



    


app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));