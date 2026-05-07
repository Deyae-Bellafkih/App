const User = require('../models/userModel');

exports.home = (req, res) => {
  res.redirect('/users');
};

exports.listUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};

exports.createUser = (req, res) => {
  const { name, email, linkImg, prezzo, numero } = req.body;
  User.create(name, email, linkImg, prezzo, numero);
  res.redirect('/users');
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id);
  res.redirect('/users');

exports.incrementNumber = (req,res) => {
User.incrementNumber(req.params.id);
res.redirect('/users');
}
exports.decrementNumber = (req,res) => {
User.decrementNumber(req.params.id);
res.redirect('/users');
}
};