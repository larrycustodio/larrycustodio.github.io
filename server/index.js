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
            title: 'Portfolio Website',
            link: 'https://larrycustod.io',
            linkTag: 'you\'re here!',
            img: 'img/work__screenshot-0.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam sit amet quam id laoreet. Maecenas ac aliquet risus. Mauris ac metus efficitur, fermentum massa non, ultricies massa. Proin nec massa eget erat hendrerit luctus nec et sapien. Donec venenatis, turpis eu porttitor cursus, nunc leo consectetur ',
            stack: ['sass','express','node','travis','nginx']
        },
        {
            title: 'Breakfast Finder',
            link: 'https://github.com/larrycustodio/breakfast-finder',
            linkTag: 'GitHub Link',
            img: 'img/work__screenshot-1.png',
            desc: 'Single page app that displays nearby breakfast spots based on preference and location. ' + 
            'Designed graphics and UI using Adobe Illustrator, '+ 
            'used React, Node.js, and Express for client and server-side rendering, ' + 
            'and Yelp and Google Maps API to fetch data.',
            stack: ['express','react','node','travis']
        },
    ]
}

app.get('/', (req,res) => {
    res.render('index', data);
});

app.listen(PORT,()=>{
    console.log('Listening on localhost:'+PORT);
})