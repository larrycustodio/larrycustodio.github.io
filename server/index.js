const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('dist'));

const indexFile = path.join(__dirname,'../dist/index.html');

app.get('/', (req, res) => {
    res.sendFile(indexFile);
});

app.get('/about', (req,res) => {
    res.render('about', Object.assign(work.data, {page_name:'about'}));
});

app.get('/blog', (req,res)=>{
    res.redirect('http://bitly.com/98K8eH');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://127.0.0.1:${process.env.PORT}`);
});