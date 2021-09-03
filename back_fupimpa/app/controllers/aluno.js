const view = require("../views/aluno");
const Aluno = require("../models/aluno");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.listarAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(function(alunos){
        res.status(200).json(view.renderMany(alunos));
    }).catch(function(error){
        res.status(400).json({mensagem: "sua requisição deu pau"});
    });
};

module.exports.inserirAluno = function(req, res){
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

    let novoAluno = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }        
    
    const existe = Aluno.find({email: novoAluno.email}).exec();
    existe.then((aluno) => {
        if (aluno.length == 0){
            let promise = Aluno.create(novoAluno);
            promise.then(function(aluno){
                //console.log(aluno);
                res.status(201).json(view.render(aluno));
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

module.exports.buscarAlunoPorId = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(function(aluno){
        res.status(200).json(view.render(aluno));
    }).catch(function(error){
        res.status(404).json({mensagem: "Aluno nao encontrado", error});
    });
};


module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    /* if(id == id_usuario_logado){ */
        let promise = Aluno.findByIdAndDelete(id).exec();
        promise.then(function(aluno){
            res.status(200).json(view.render(aluno));
        }).catch(function(error){
            res.status(400).json({mensagem: "Aluno nao encontrado", error});
        });
    /* } else{
        res.status(401).json({mensagem: "usuário errado"});
    } */
};

