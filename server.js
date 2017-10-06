const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.set('views', './public/views');
app.engine('html', require('hbs').__express);

app.get('/', (req, res) => {
  res.render('hello');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
