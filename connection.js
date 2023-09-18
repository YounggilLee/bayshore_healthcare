/*This page is to set up connection for mongodb.
 @author       Younggil, Lee(iamleeyounggil@gmail.com)
 @date         2023/09 created.
*/
const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/book', {
        useNewUrlParser: true
    })
  }
  
  connect()

  mongoose.connection.once("open", function () {
    console.log("Connected successfully");
  });
  mongoose.connection.on('error', (error) => {
    console.log(`===>  Error connecting to Database`)
    console.log("Reason: ", error)
  })
  mongoose.connection.on('disconnected', () => {
    console.error('Disconnected mongodb. Try to connect mongodb.');
    connect()
  })
}