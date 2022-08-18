//! Cria a classe de controller:
class HomeController{
    //* Define o Index do Controller:
    index(req, res) {
        res.render('index');
    }
    //* Define o Login do Controller:
    login(req, res){
        res.render('pages/login')
    }
}

//! Exportar o HomeController:
module.exports = new HomeController();