const controller = require("../controllers/atividade");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.get("/api/atividade", controller.listarAtividades);
    app.get("/api/atividade/:id", controller.buscarAtividadesPorId);
    app.get("/api/atividade/modulo/:modulo", controller.buscarAtividadePorModulo);

    app.use("/api/atividade", controllerAuth.checar);
    app.post("/api/atividade", controller.inserirAtividade);    
    app.delete("/api/atividade/:id", controller.removerAtividade);
};