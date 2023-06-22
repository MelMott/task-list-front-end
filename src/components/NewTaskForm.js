import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const NewTaskForm = ({ addTask }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = async (event) => {
event.preventDefault();
if (title.trim() === '' || description.trim() === '') {
    return;
}
try {
    const response = await axios.post('http://localhost:5000/tasks', {
    title,
    description,
    isComplete: false,
    });
    addTask(response.data.task);
    setTitle('');
    setDescription('');
} catch (error) {
    console.error('Error adding task:', error);
}
};

return (
<form className="new-task-form" onSubmit={handleSubmit}>
    <input
    type="text"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    placeholder="Enter task title"
    />
    <input
    type="text"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    placeholder="Enter task description"
    />
    <button type="submit">Add Task</button>
</form>
);
};

NewTaskForm.propTypes = {
addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
