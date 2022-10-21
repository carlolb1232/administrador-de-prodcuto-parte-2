const { response, json } = require("express");
const { Product } = require("../models/product.model");


module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product=>response.json(product))
    .catch(err=>response.json(err))
};

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then(products=>response.json(products))
    .catch(err=>response.json(err));
}

module.exports.getOneProduct = (request, response) => {
  const { id } = request.params
  Product.findOne({_id:id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}