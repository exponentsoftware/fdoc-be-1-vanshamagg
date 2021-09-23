const { Router } = require('express');
const { addTodo, getAll, getOne, deleteTodo } = require('../controllers/todo.controller');

const router = Router();

router.post('/', addTodo);
router.get('/', getAll);
router.get('/:id', getOne);
router.delete('/:id', deleteTodo);

module.exports = router;