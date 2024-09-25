import React from 'react';
import { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                placeholder="Tarea Nueva"
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default AddTask;