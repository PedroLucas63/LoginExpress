//! Importar o Router e instancia:
const { Router } = require('express');
const routers = new Router();

//! Importa o Controller:
const Home = require('../controller/homeController');

//! Definir as nossas rotas:
//* Definir rota Index:
routers.get('/', Home.index);

//* Definir rota Login:
routers.get('/login', Home.login);

//! Exportar as rotas:
module.exports = routers;