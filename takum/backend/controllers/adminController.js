 module.exports= {
  login: async (req, res) => {
    
    const key = "@vibrantmanagers19"
    const password = req.body.login
      if (password === key) {
        res.status(200)
      } 
      else {
        res.status(400).send("Invalid Credentials");
        console.log('sad')
      }
     
  }
};
