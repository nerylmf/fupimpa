//const alunos = require("../routes/aluno");

function render(atividade){
    return{
        id: atividade._id,
        titulo: atividade.titulo,
        descricao: atividade.descricao
    }
}

module.exports.render = render;

function renderMany(atividades){
    return atividades.map(render);
}

module.exports.renderMany = renderMany;