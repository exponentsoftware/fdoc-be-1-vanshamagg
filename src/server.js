require('./database');
const express = require('express');
const TodoRouter = require('./routers/todo.router');

const app = express();

app.use(express.json())

app.use('/todo', TodoRouter);

app.use('/', (req, res) => {
  res.json({ status: 'ok' });
});


const server = app.listen(3000, () => console.log(`APP STARTED ON PORT ${ server.address().port } `));