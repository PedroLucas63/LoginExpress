//! Importar o express e instanciar ele:
const express = require('express');

//* Instanciamento do Express:
const app = express();

//! Definir a Engine do Projeto:
app.set('view engine', 'ejs');
app.set('views', './views');

//! Importar as rotas e configurar:
const routers = require('./routers/routers');
app.use(routers);

//! Definir a porta e iniciar o servidor:
const hostname = 'localhost';
const port = 3000;

//* Iniciar o servidor:
app.listen(port, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});