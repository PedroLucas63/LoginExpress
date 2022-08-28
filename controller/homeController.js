//! Define os usuários:
var users = ['Pedro Lucas', 'Luiza Nicole', 'Diego Dantas', 'Marcos', 'José Arnoldo', 'Lucas Paolo', 'Gabriel Santana', 'Jorge Amado', 'Luan Santana'];

//! Cria a classe de controller:
class HomeController{
    //* Define o Index do Controller:
    index(req, res) {
        res.render('index', {logado: req.session.logado});
    }
    
    //* Define o Home do Controller:
    home(req, res){
        res.render('pages/home', {logado: req.session.logado, users: users});
    }

    //* Define a página Users do Controller:
    users(req, res){
        res.render('pages/users', {logado: req.session.logado, users: users});
    }

    //* Define a página de registrar usuários:
    register(req, res){
        res.render('pages/register', {logado: req.session.logado});
    }

    //* Define a página de regist
}

//! Exportar o HomeController:
module.exports = new HomeController();