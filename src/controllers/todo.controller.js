const { Todo } = require('../database');

// 1
async function addTodo(req, res) {
  console.log('--- IN ---');

  try {
    const { username, title, author, completed, category } = req.body;
    const todo = await Todo.create({
      username,
      title,
      author,
      completed,
      category
    });
    console.log(todo);
    res.status(301).json({ message: 'created', todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
  }
}

//2
async function getAll(req, res) {
  try {
    const todos = await Todo.find();
    res.status(201).json({ todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
  }
}

// 3
async function getOne(req, res) {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
  }
}

// 4
async function deleteTodo(req, res) {
  try {
    const id = req.params.id;
    await Todo.deleteOne({ _id: id });
    res.status(200).json({ message: 'deleted', id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
  }
}

// 5
function update(req, res) {

}

module.exports = { addTodo, getAll, getOne, deleteTodo };