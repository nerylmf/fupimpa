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

    if(req.body.email == ""){
        res.status(400).json({mensagem: "Email está vazio"});
        return;
    }
    if(req.body.nome == ""){
        res.status(400).json({mensagem: "Nome está vazio"});
        return;
    }
    if(req.body.senha == ""){
        res.status(400).json({mensagem: "Senha está vazio"});
        return;
    }

    let novoProfessor = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }        
    
    const existe = Professor.find({email: novoProfessor.email}).exec();
    existe.then((professor) => {
        if (professor.length == 0){
            let promise = Professor.create(novoProfessor);
            promise.then(function(professor){
                //console.log(aluno);
                res.status(201).json(view.render(professor));
            }).catch(function(error){
                res.status(400).json({mensagem: "sua requisição deu ruim"});
            });
        }else{
            res.status(400).json({mensagem: "Email já cadastrado"});
        }
    }).catch((error) => {
        res.status(400).json({mensagem: "Bad Request"});
    });  
};

module.exports.buscarProfessorPorId = function(req, res){
    let id = req.params.id;
    let promise = Professor.findById(id).exec();
    promise.then(function(professor){
        res.status(200).json(view.render(professor));
    }).catch(function(error){
        res.status(404).json({mensagem: "Professor nao encontrado", error});
    });
};


module.exports.removerProfessor = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_professor_logado = payload.id;
    /* if(id == id_professor_logado){ */
        let promise = Professor.findByIdAndDelete(id).exec();
        promise.then(function(usuario){
            res.status(200).json(view.render(usuario));
        }).catch(function(error){
            res.status(400).json({mensagem: "Professor nao encontrado", error});
        });
    /* } else{
        res.status(401).json({mensagem: "usuário errado"});
    } */
};

