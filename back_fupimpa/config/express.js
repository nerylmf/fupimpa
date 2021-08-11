const bodyParser = require("body-parser");
const express = require("express");
const routerAluno = require("../app/routes/aluno");
const routerProfessor = require("../app/routes/professor")
const routerAtividade = require("../app/routes/atividade")

module.exports = function(){
    let app = express();
    app.set("port", 8393);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));


    app.use(express.static("./public"));

    routerAluno(app);
    routerProfessor(app);
    routerAtividade(app);

    return app;
};