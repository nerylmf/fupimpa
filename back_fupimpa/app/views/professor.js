const alunos = require("../routes/aluno");

function render(professor){
    return{
        id: professor._id,
        nome: professor.nome,
        email: professor.email
    }
}

module.exports.render = render;

function renderMany(professores){
    return professores.map(render);
}

module.exports.renderMany = renderMany;