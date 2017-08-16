const express = require('express');
const app = express();

app.use(express.static('./app'));

require('./routes.js')(app, express);

app.set('port', (process.env.PORT || 5001));
app.listen(app.get('port'), ()=> {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
