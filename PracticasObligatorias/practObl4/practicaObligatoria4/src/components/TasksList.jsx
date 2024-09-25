import React from 'react';

const TaskList = ({ tasks, markCompletedTask, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span
                        style={{
                            textAlign: 'center',
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'grey' : 'white',
                            cursor: 'pointer',
                        }}
                        onClick={() => markCompletedTask(index)}
                    >
                        {task.name}
                    </span>
                    <button onClick={() => deleteTask(index)}>Eliminar Tarea</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;