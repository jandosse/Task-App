const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

// const first = new Task({
//   description: '   Read that book    ',
//   completed: true,
// });

// first.save().then(console.log).catch(console.dir);

// const me = new User({
//   name: '   Zhandos  ',
//   email: 'ZHaNDO@mail.ru   ',
//   password: '   111111111   ',
// });

// me.save()
//   .then(console.log)
//   .catch(err => console.log(err));
