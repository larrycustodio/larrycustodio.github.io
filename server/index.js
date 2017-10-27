const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Mailchimp = require('mailchimp-api-v3');
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
            stack: ['express', 'react', 'node', 'travis']
        },
        {
            title: 'Portfolio Website',
            link: 'https://larrycustod.io',
            linkTag: 'you\'re here!',
            img: 'img/work__screenshot-0.png',
            desc: 'Personalized portfolio website to wrap everything up ',
            stack: ['sass', 'express', 'node', 'travis', 'nginx']
        },
    ]
}

app.get('/', (req, res) => {
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.status(308).redirect('/');
});

app.post('/contact', (req, res) => {
    const api_key = '028dd3005c6ca553c77f665ce8a40a8c-us14';
    const list_id = 'bfdda184b8';

    const mailchimp = new Mailchimp(api_key);

    mailchimp.post('lists/' + list_id, {
        members: [{
            email_address: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            status: 'subscribed'
        }]})
        .then(result => {
            res.send('success!');
        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(PORT, () => {
    console.log('Listening on localhost:' + PORT);
})