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

const data = {
    year: new Date().getFullYear().toString(),
    workHighlights: [
        {
            title: 'WooCRM',
            imgsource:'assets/img/woocrm-screen-1.png',
            description: 'For the final project for my coding bootcamp, '+ 
            'our team of two developers was tasked to prototype a Content Management System for WooCommerce. '+
            'Contributions to this project include: the WooCommerce API authentication process, server API creation, dashboard UI design' +
            'and handling search results lists (i.e. product orders, customers, and product) on both the client and server-side.'
        },
        {
            title: 'Grub To Eat',
            imgsource:'assets/img/grubtoeat.jpg',
            link: 'https://grubtoeat.herokuapp.com',
            githubLink: 'https://github.com/larrycustodio/grub-to-eat/',
            description: 'As a collaboration project, our team was tasked '+ 
            'to create a concept online ordering app. I was tasked on designing '+
            'the backend API endpoints, user login authentication and persistence, '+            
            'and the order checkout UI/UX.'
        },
        {
            title: 'Budgtr',
            imgsource:'assets/img/budgetplanner.jpg',
            link: 'https://lc-budgeting-app.herokuapp.com/',
            githubLink: 'https://github.com/larrycustodio/redux-budget-tracker/',
            description: 'Budgetr is an ongoing project that I started '+ 
            'in order to learn state management with React and Redux. '+
            'In addition to capabilities of handling state management, '+
            'I\'ve also explored using Recharts.js ' +
            'to add visual insights.'
        },
        {
            title: 'WeatherApp',
            imgsource:'assets/img/grubtoeat.jpg',
            link: 'https://lc-weather-app.herokuapp.com/',
            githubLink: 'https://github.com/larrycustodio/redux-weather-app',
            description: 'I created a weather app as an exercise on ' +
            'dispatching asynchronous actions with Redux. ' +
            'This UI was hand-coded my yours truly, sprinkled with SVG + CSS animations.'
        }
    ]
}

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