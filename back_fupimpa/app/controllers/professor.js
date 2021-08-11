const view = require("../views/professor");
const Professor = require("../models/professor");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.listarProfessores = function(req, res){
    let promise = Professor.find().exec();
    promise.then(function(professores){
        res.status(200).json(view.renderMany(professores));
    }).catch(function(error){
        res.status(500).json({mensagem: "sua requisição deu pau"});
    });
};

module.exports.inserirProfessor = function(req, res){
    //let usuario = req.body;

    let professor = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }    
    let promise = Professor.create(professor);

    promise.then(function(professor){
        res.status(201).json(view.render(professor));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisição deu ruim"});
    });
};

module.exports.buscarProfessorPorId = function(req, res){
    let id = req.params.id;
    let promise = Professor.findById(id).exec();
    promise.then(function(professor){
        res.status(200).json(view.render(professor));
    }).catch(function(error){
        res.status(404).json({mensagem: "sua requisição deu ruim", error});
    });
};


module.exports.removerProfessor = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_professor_logado = payload.id;
    if(id == id_professor_logado){
        let promise = Professor.findByIdAndDelete(id).exec();
        promise.then(function(usuario){
            res.status(200).json(view.render(usuario));
        }).catch(function(error){
            res.status(400).json({mensagem: "sua requisição deu ruim", error});
        });
    } else{
        res.status(401).json({mensagem: "usuário errado"});
    }
};

