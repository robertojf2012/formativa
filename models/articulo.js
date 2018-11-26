'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticuloSchema = Schema({
	title: String,
	description: String,
	url: String
})

module.exports = mongoose.model('Articulo', ArticuloSchema)