const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('views', './views');
app.set('view engine', 'ejs');

const data = {
    currentYear: new Date().getFullYear().toString(),
    workHighlights: [
        {
            title: 'Breakfast Finder',
            link: 'https://github.com/larrycustodio/breakfast-finder',
            linkTag: 'GitHub Link',
            img: 'img/work__screenshot-1.png',
            desc: 'Interactive breakfast place finder using React, Yelp, and Google Maps API',
            stack: ['express','react','node','travis']
        },        
        {
            title: 'Portfolio Website',
            link: 'https://larrycustod.io',
            linkTag: 'you\'re here!',
            img: 'img/work__screenshot-0.png',
            desc: 'Personalized portfolio website to wrap everything up ',
            stack: ['sass','express','node','travis','nginx']
        },
    ]
}

app.get('/', (req,res) => {
    res.render('index', data);
});

app.post('/thanks', (req,res) => {
    res.render('thanks', {contact: req.body});
});
app.listen(PORT,()=>{
    console.log('Listening on localhost:'+PORT);
})