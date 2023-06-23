import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, setComplete, removeTask }) => {

  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" 
        data-testid={`delete button ${id}`}
        onClick={() => removeTask(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  setComplete: PropTypes.func,
  removeTask: PropTypes.func,
};

export default Task;
