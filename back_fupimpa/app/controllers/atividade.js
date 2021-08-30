const view = require("../views/atividade");
const Atividade = require("../models/atividade");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.listarAtividades = function(req, res){
    let promise = Atividade.find().exec();
    promise.then(function(atividades){
        res.status(200).json(view.renderMany(atividades));
    }).catch(function(error){
        res.status(500).json({mensagem: "sua requisição deu pau"});
    });
};

module.exports.inserirAtividade = function(req, res){
    //let usuario = req.body;

   

    let atividade = {
        titulo: req.body.titulo,
        modulo: req.body.modulo,
        descricao: req.body.descricao,
        referencias: req.body.referencias,
        resposta: req.body.resposta,
    }

    let promise = Atividade.create(atividade);

    promise.then(function(atividade){
        res.status(201).json(view.render(atividade));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisição deu ruim"});
    });
};

module.exports.buscarAtividadesPorId = function(req, res){
    let id = req.params.id;
    let promise = Atividade.findById(id).exec();
    promise.then(function(atividade){
        res.status(200).json(view.render(atividade));
    }).catch(function(error){
        res.status(404).json({mensagem: "sua requisição deu ruim", error});
    });
};


module.exports.removerAtividade = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);

    let promise = Atividade.findByIdAndDelete(id).exec();
    promise.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisição deu ruim", error});
    });
    /* //let id_professor_logado = payload.id;
    if(id == id_professor_logado){
        let promise = Atividade.findByIdAndDelete(id).exec();
        promise.then(function(usuario){
            res.status(200).json(view.render(usuario));
        }).catch(function(error){
            res.status(400).json({mensagem: "sua requisição deu ruim", error});
        });
    } else{
        res.status(401).json({mensagem: "usuário errado"});
    } */
};

module.exports.buscarAtividadePorModulo = function(req, res){

    let modulo = req.params.modulo;
    let promise = Atividade.find().exec();  
     

    promise.then(function(atividades){        
        let listAtividade = atividades.filter(function (atividade) {
                return atividade.modulo == modulo;
            }
        );

        res.status(200).json(view.renderMany(listAtividade));
    }).catch(function(error){
        console.log(error);
        res.status(500).json({mensagem: "sua requisição deu pau"});
    });
};
