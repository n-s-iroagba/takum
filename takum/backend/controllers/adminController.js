 module.exports= {
  login: async (req, res) => {
    
    const key = "@vibrantmanagers19"
      // Get user input
    const password = req.body.k
      // Validate user input
      if (!password) {
        res.status(400).send("login key is required");
        console.log('nothing')
      }
      // Validate if user exist in our database

      if (password === key) {
        res.status(200)
      } 
      else {
        res.status(400).send("Invalid Credentials");
        console.log('sad')
      }
     
  }
};
