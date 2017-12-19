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
            title: 'Grub To Eat',
            imgsource:'assets/img/grubtoeat.jpg',
            link: 'https://grubtoeat.herokuapp.com',
            githubLink: 'https://github.com/larrycustodio/grub-to-eat/',
            description: 'As a collaboration project, our team was tasked '+ 
            'to create a concept online ordering app. Key features include: '+
            'component management with Redux, API endpoint creation, '+            
            'user login authentication with account management, order checkout '+
            'processing, and search results sorting through Google Places API.'
        },
        {
            title: 'Budgtr',
            imgsource:'assets/img/budgetplanner.jpg',
            link: 'https://lc-budgeting-app.herokuapp.com/',
            githubLink: 'https://github.com/larrycustodio/redux-budget-tracker/',
            description: 'Budgetr is an ongoing project that I have started '+ 
            'in order to learn state management with React and Redux. '+
            'In addition, I added graphing components rendered using Recharts.js, ' +
            'which adds visual insights for budget tracking.'
        },
        {
            title: 'WeatherApp',
            imgsource:'assets/img/grubtoeat.jpg',
            link: 'https://lc-weather-app.herokuapp.com/',
            githubLink: 'https://github.com/larrycustodio/redux-weather-app',
            description: 'I created a weather app to pratice ' +
            'dispatching asynchronous actions with Redux. ' +
            'The design was based on an open-sourced weather app GUI,' +
            ' then modified using SVG elements and animations with CSS + JS.'
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