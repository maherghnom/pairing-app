const path = require('path');

module.exports = (app, express) => {
  app.get('/', (req, res)=> res.sendFile(path.join(__dirname+'/index.html')));
}
