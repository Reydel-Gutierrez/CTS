const User = require('index.js');

exports.postAddProduct = (req, res, next) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;
  const userZip = req.body.userZip;
  const user = new User({
    userName: userName,
    userPassword: userPassword,
    userZip: userZip
  });
  user
    .save()
    .then(result => {
      console.log('Created User');
      res.redirect('/index.html');
    })
    .catch(err => {
      console.log(err);
    });
};
