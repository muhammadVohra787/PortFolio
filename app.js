
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/img',express.static(__dirname + 'public/img'))
app.use('/css',express.static(__dirname + 'public/css'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
console.log(__dirname);
module.exports=app;



