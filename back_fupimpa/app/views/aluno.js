const alunos = require("../routes/aluno");

function render(aluno){
    return{
        id: aluno._id,
        nome: aluno.nome,
        email: aluno.email
    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render);
}

module.exports.renderMany = renderMany;