const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const axios = require('axios');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('dist'));
app.set('views', './views');
app.set('view engine', 'ejs');

const work = require('./work-data');
const {data} = work;

app.get('/', (req, res) => {
    res.render('index', Object.assign(data, {page_name:''}));
});

app.get('/about', (req,res) => {
    res.render('about', Object.assign(data, {page_name:'about'}));
});

app.get('/blog', (req,res)=>{
    res.redirect('http://bitly.com/98K8eH');
})

app.post('/contact', (req, res) => {
    axios.post('https://formspree.io/hello@larrycustod.io',
    req.body)
    .then(success => {
        res.send(res.status);
    })
    .catch(err => {
        res.send(res.status);
    });
});

app.listen(PORT, () => {
    console.log('Listening on localhost:' + PORT);
})