const bcrypt = require("bcrypt");
const Aluno = require("../models/aluno")
const jwt = require("jsonwebtoken");


module.exports.logar = function(req, res){
    //console.log(req.body);
    Aluno.findOne({nome: req.body.nome})
        .then(function(usuario){
            
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({id: usuario.id}, "senha");
                res.status(200).json({token: token, nome: usuario.nome});
            }else{
                res.status(401).send("azedou");
            }
        })
        .catch(function(error){
            res.status(401).send("azedou");
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