//const alunos = require("../routes/aluno");

function render(aluno){
    return{
        id: aluno._id,
        nome: aluno.nome,
        matricula: aluno.matricula,
        email: aluno.email
    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render);
}

module.exports.renderMany = renderMany;