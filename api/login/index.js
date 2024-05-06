const express = require('express');

const loginApi = express.Router();
const registerApi = express.Router();

const {
  login,
  register
} = require('./crud');


loginApi.route('/')
  .post(login)
;

registerApi.route('/')
  .post(register)
;

module.exports = {
  loginApi,
  registerApi
};