const alunos = require("../routes/aluno");

function render(atividade){
    return{
        id: atividade._id,
        titulo: atividade.titulo,
        modulo: atividade.modulo,
        descricao: atividade.descricao,
        referencias: atividade.referencias,
        resposta: atividade.resposta,
    }
}

module.exports.render = render;

function renderMany(atividades){
    return atividades.map(render);
}

module.exports.renderMany = renderMany;