const bcrypt = require("bcrypt");
const Aluno = require("../models/aluno");
const Professor = require("../models/professor");
const jwt = require("jsonwebtoken");


module.exports.logar = function(req, res){
    //console.log(req.body);
    Aluno.findOne({email: req.body.email})
        .then(function(usuario){
            
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({id: usuario.id}, "senha");
                res.status(200).json({id: usuario.id, token: token});
            }else{
                res.status(401).send("Credenciais erradas");
            }
        })
        .catch(function(error){
            res.status(401).send("Usuário não encontrado");
        })
}

module.exports.logarProfessor = function(req, res){
    //console.log(req.body);
    Professor.findOne({email: req.body.email})
        .then(function(usuario){
            
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({id: usuario.id}, "senha");
                res.status(200).json({id: usuario.id, token: token});
            }else{
                res.status(401).send("Credenciais erradas");
            }
        })
        .catch(function(error){
            res.status(401).send("Usuário não encontrado");
        })
}

module.exports.checar = function (req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "senha", function(err, decoded){
        if(err){
            res.status(401).send("Token deu ruim!");
        }
        next();
    })
}