function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros',callback);
}

ProdutosDAO.prototype.salva = function(produto, callback){
    this._connection.query('insert into livros set ?',produto,callback);
}

ProdutosDAO.prototype.deletar = function(produto, callback){
    this._connection.query('delete from livros where titulo = ?',[produto.titulo],callback);

}


module.exports = function(){
    return ProdutosDAO;
}