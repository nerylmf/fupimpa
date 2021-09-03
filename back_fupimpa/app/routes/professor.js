const controller = require("../controllers/professor");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/api/professor/signin", controllerAuth.logarProfessor);
    app.post("/api/professor", controller.inserirProfessor);

    app.use("/api/professor", controllerAuth.checar);

    app.get("/api/professor", controller.listarProfessores);
    app.get("/api/professor/:id", controller.buscarProfessorPorId);
    app.delete("/api/professor/:id", controller.removerProfessor);
};