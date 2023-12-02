const secretKey='takum'
const jwt = require('jsonwebtoken');
module.exports = {
  login: async (req, res) => {

    const key = "@vibrantmanagers19"
    const password = req.body.password
    const username = req.body.username
    if (username === 'example' && password === key) {
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  }
}  
