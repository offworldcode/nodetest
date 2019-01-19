//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname,"public")));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
     res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
 });



app.listen(8080);
//server.listen(8080);