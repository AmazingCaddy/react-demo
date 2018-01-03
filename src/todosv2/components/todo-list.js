import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) => {
  const todoList = todos.map(todo => {
    return (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    );
  });
  return (
    <ul>{todoList}</ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;