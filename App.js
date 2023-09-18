
/*This page is to set up configurations.
 @author       Younggil, Lee(iamleeyounggil@gmail.com)
 @date         2023/09 created.
*/

const express = require('express');
const createError = require('http-errors');
const connection = require('./connection')

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use('/', require('./routes'));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'Waiting....')
})

app.use(function(req, res, next) {
    next(createError(404));
});

// db connection
connection();
