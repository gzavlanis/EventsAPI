const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/events', require('./routes/api/events'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => console.log('App started'));