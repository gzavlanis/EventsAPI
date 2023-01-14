const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/events', require('./routes/api/users'));
app.set('viiew engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => console.log('App started'));