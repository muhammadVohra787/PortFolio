
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/css',express.static(__dirname + 'public/css'))
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  res.render('home.ejs')
});
app.get('/', (req, res) => {
  res.render('home.ejs')
});
app.get('/about', (req, res) => {
  res.render('about.ejs')
});
app.get('/projects', (req, res) => {
  res.render('projects.ejs')
});
app.get('/services', (req, res) => {
  res.render('service.ejs')
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
console.log(__dirname);
module.exports=app;



