const mongoose = require('mongoose');

module.exports = function(uri){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection.on('connected', function(){
        console.log('Mongoose! Conectado em '+uri);
    });
    mongoose.connect(uri);
    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose! Desconectado de '+uri);
    });
    mongoose.connect(uri);
    mongoose.connection.on('error', function(){
        console.log('Mongoose! Erro de conexão: '+uri);
    });
    mongoose.set('debug', true);
}