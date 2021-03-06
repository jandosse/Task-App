const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// const multer = require('multer');
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // if (!file.originalname.endsWith('.pdf')) {
//     //   return cb(new Error('Please upload PDF'));
//     // }

//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload Word Document'));
//     }
//     cb(undefined, true);

//     // cb(new Error('file must be PDF'));
//     // cb(undefined, true);
//     // cb(undefined, false);
//   },
// });

// app.post(
//   '/upload',
//   upload.single('upload'),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log('Server is running on port', port));

const Task = require('./models/Task');
const User = require('./models/User');
