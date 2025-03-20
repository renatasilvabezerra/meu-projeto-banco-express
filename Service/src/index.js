//importa o express.
const express = require ('express');
//importa o mysql
const mysql = require('mysql2');

//cria o express.application
const app = express();

const dataBase = 'bb' // Nome do dataBase

// cria uma conexão com o BD
const connection = mysql.createPool({ // Cria uma coneção deixando-os abertos em vez de fechados quando você terminar de usá-los, pois createConnection não da para fazer getConnection pq ele fecha a conexão depois de usada.
  host: 'localhost', // Esta na maquina
  user: 'root', // Usuario que tem acesso ao banco de bados
  database: dataBase, // nome do banco
  password: '250904' // Senha
});

connection.getConnection(function(err, conn) { // Pega a conexão e verifica:
  if(conn != null){ // Se conectado
    console.log(`Banco ${dataBase} Conectado`); 
    connection.query( // Faz uma query para banco de bados
      'SELECT * FROM tabela_1',
      function(err, results, fields) {
        if(results != null){
          console.log(results); // printa o resultado sucedido da query acima.
          // console.log(fields); // printa outras informações (metadados) da query bem sucedida.
        }else{
          console.error(err);// se a query for mal sucedida printa o erro.
        }
    });
  }else{
    console.error(err);// se conexão foi mal sucedida printa o erro.
  }
});


//método para ouvir as requisições e a porta onde o server vai rodar
app.listen(3000, () => console.log("Server roda na porta 3000") );
//o callback dentro dos parenteses, utilizando uma função anônima (), foi passado para dar feedback.


//rodar esse arquivo no terminal Powershell, dentro do caminho, usando Node - rodando fica node e se der Ctrl+C ele volta para o powershell.
//No Json precisa startar a aplicação assim "start": "node src/index.js"