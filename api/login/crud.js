const pool = require('../../db');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const authErrorMessage = 'Incorrect Email or Password';

    const query = `
      SELECT password FROM credentials
      where email = $1
    `;

    const response = await pool.query(
      query,
      [req.body.email]
    );
    if (!response.rows?.length) return res.status(401).send(authErrorMessage);

    const dbPassword = response?.rows[0]?.password;
    const correctPassword = await bcrypt.compare(req?.body?.password, dbPassword);
    if (!correctPassword) return res.status(401).send(authErrorMessage);

    return res.status(200).send({ loggedIn: true });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Error logging in')
  }
};

const register = async (req, res) => {
  try {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;

    if (!emailRegex.test(req?.body?.email)) return res.status(400).send('Invalid Email');
    if (!passwordRegex.test(req?.body?.password)) return res.status(400).send('Invalid Password');

    const emailQuery = await pool.query(
      'SELECT * FROM credentials WHERE email = $1',
      [req?.body?.email]
    );

    if (emailQuery?.rows?.length) {
      return res.status(400).send('Email already exists');
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req?.body?.password, salt);

    const query = `
      INSERT INTO credentials
      (email, password)
      VALUES ($1, $2)
    `;

    await pool.query(
      query,
      [req?.body?.email, hashedPassword]
    );

    return res.status(201).send({ loggedIn: true });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Error signing up')
  }
};

module.exports = {
  login,
  register
};
