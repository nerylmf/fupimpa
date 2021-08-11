const mongoose = require("mongoose");

module.exports = function(){
    let schema = mongoose.Schema({
        titulo: {
            type: "String",
            required: true
        },
        descricao:{
            type: "String",
            required: true
        },
        resposta:{
            type: "String",
            required: true
        }
    });
    return mongoose.model("Atividade", schema);
}();