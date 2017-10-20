const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('./public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(PORT,()=>{
    console.log('Listening on localhost:'+PORT);
})