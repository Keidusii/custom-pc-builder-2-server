const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pool = require('./db');
const cartRouter = require('./api/cart/index');
const path = __dirname + '/../dist';

const port = 5002;
const startDB = async () => {
  await pool.connect()
}

startDB()

app.use(express.static(path));
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  try {

  } catch (err) {
    console.log(err.message);
  }
});

app.post('/', async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err.message);
  }
});

app.put('/', async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err.message);
  }
});

app.delete('/', async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err.message);
  }
});

app.use('/cart', cartRouter);

app.listen(port, function() {
  console.log(`Server is sprinting on port ${port}`);
 });