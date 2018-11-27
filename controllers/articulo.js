'use strict'

const Articulo = require('../models/articulo');

function getArticulos(res,req){
	Articulo.find({}).collation({locale:"en"}).exec((err,articulos)=>{
    if(err){
      return res.status(500).send();
    }
    if(!articulos){
      return res.status(404).send();
    }

    return res.status(200).send(articulos);

  });
}

module.exports = {
	getArticulos
}