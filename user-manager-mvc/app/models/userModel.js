let users = [];

const User = {
  findAll: () => users,

  create: (name, email, linkImg, prezzo, numero) => {
    const newUser = {
      id: Date.now(), name, email, linkImg, prezzo, numero
    };

    users.push(newUser);
    return newUser;
  },

  findById: (id) => users.find(u => u.id === parseInt(id)),

  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  }

  incrementNumber: (id) => {
  const user = users.find(u => u.id === parseInt(id));
  if (user) {
  user.number = (parseInt(user.number) || 0) + 1;
  }
  return user;
  }
};

module.exports = User;