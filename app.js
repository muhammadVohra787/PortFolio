/* app.js, Muhammad vohra, 301257640, 2023/09/29 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const expressConfig = require('./config/express');
const app = expressConfig(); 
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
