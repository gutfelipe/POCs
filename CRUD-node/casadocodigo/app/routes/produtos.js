module.exports = function(app) {
    
    var listaProdutos = function(req, res){ 
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, results){
            res.render('produtos/lista', {lista:results});
        });
        connection.end();
    };

    app.get('/produtos',listaProdutos);

    app.get("/produtos/form",function(req, res) {
        res.render('produtos/form');
        console.log("funcionou");
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;
   
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, results){
        res.redirect('/produtos');    
        })
    });

    app.get("/produtos/del",function(req, res){
        res.render('produtos/del');
    });
    
    app.post('/produtos2',function(req, res) {
        var produto = req.body;
        console.log('produtos json??');
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.deletar(produto, function(erros, results){
            console.log(results);
            console.log(erros);
        res.redirect('/produtos');
        })
    });
    
}
