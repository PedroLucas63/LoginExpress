//! Cria a classe de controller:
class HomeController{
    //* Define o Index do Controller:
    index(req, res) {
        res.render('index', {logado: req.session.logado});
    }
    //* Define o Home do Controller:
    home(req, res){
        res.render('pages/home', {logado: req.session.logado});
    }
}

//! Exportar o HomeController:
module.exports = new HomeController();