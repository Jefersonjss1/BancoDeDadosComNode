const sequelize = require('sequelize');

const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});


//Criando uma tabela do banco de dados pelo node
const postagens = sequelize2.define('Postagens', {
    titulo: {
        type: sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
})

/*
Executando a criação da tabela, só precisa ser feito uma vez

postagens.sync({force:true})
*/

/*
Passando dados para a tabela

postagens.create({
    titulo:"Promoção dia das mães",
    conteudo: "No mês do dia das mães todas as lojas terão 50% de desconto nos esmaltes"
})
*/

//Criando uma tabela do banco de dados pelo node
const usuarios = sequelize2.define('usuarios', {
    nome: {
        type: sequelize.STRING(50)
    },
    sobrenome: {
        type: sequelize.STRING(50)
    },
    idade: {
        type: sequelize.INTEGER
    },
    email: {
        type: sequelize.STRING(50)
    }
})

/*
Criando uma tabela do banco de dados pelo node

usuarios.create({
    nome: "Jeferson",
    sobrenome: "Araujo",
    idade: 22,
    email: "jeferson.jcaraujo@senacsp.edu.br"
})
*/ 



/*
Testando conexão com banco

usuario.sync({force:true})
*/ 

/* Testando conexão com banco

sequelize2.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log(`Falha ao se conectar ${erro}`)
})
*/