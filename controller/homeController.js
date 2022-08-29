//! Define os usuários:
var users = [
    {
        'name':'Pedro Lucas',
        'email':'pedro.lucas@gmail.com',
        'password':'123456'    
    }, 
    {
        'name':'Luiza Nicole',
        'email': 'luiza.nicole@gmail.com',
        'password':'202020'    
    },
    {
        'name': 'André Marques',
        'email': 'andre.marques@gmail.com',
        'password': 'hamburguer10'
    },
    {
        'name': 'Jorge Amado',
        'email': 'jorge.amado@gmail.com',
        'password': 'sorvete'
    },
    {
        'name': 'Josué Gonzále',
        'email': 'josue.gonzale@gmail.com',
        'password': 'lula2020'
    }
];

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

    //* Define a página de atualizar usuários:
    update(req, res){
        var id = req.params.id
        res.render('pages/update', {logado: req.session.logado, user: users[id]});
    }

    //* Define a página de deletar usuários:
    delete(req, res){
        var id = req.params.id
        res.render('pages/delete', {logado: req.session.logado, user: users[id], id: id});
    }
}

//! Exportar o HomeController:
module.exports = new HomeController();