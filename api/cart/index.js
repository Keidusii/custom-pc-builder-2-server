const express = require('express');

const cartApi = express.Router();

const {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} = require('./crud');


cartApi.route('/')
  .get(getCart)
  .post(addToCart)
  .put(updateCart)
  .delete(removeFromCart)
;

module.exports = cartApi;