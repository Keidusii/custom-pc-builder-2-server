const pool = require('../../db');

const getCart =  (req, res) => {
  try {
    pool.query(
      'SELECT * FROM cart ORDER BY created',
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).json(results.rows);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

const addToCart = async (req, res) => {
  let { pc } = req.body;
  try {
    pool.query(
      'INSERT INTO cart (pc) VALUES ($1) RETURNING *',
      [pc],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(201).send('Item added to Cart');
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

// possible to use in future implementation (edit customization in cart?)
const updateCart = async (req, res) => {
  const { item, index } = req.body;
  try {
    pool.query(
      'UPDATE cart SET pc = $1 WHERE id = $2',
      [item, index],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`PC updated`);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

const removeFromCart = async (req, res) => {
  const { id } = req.body;
  try {
    pool.query(
      'DELETE FROM cart WHERE id = $1',
      [id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Item removed from cart`); 
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
};