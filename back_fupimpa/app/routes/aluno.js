const controller = require("../controllers/aluno");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/api/aluno/signin", controllerAuth.logar);
    app.post("/api/aluno", controller.inserirAluno);

    app.use("/api/aluno", controllerAuth.checar);

    app.get("/api/aluno", controller.listarAlunos);
    app.get("/api/aluno/:id", controller.buscarAlunoPorId);
    app.delete("/api/aluno/:id", controller.removerAluno);
};