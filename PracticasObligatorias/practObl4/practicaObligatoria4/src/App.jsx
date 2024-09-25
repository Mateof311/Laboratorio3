import { useState } from 'react'
import TaskList from './components/TasksList'
import AddTask from './components/AddTask'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  
  const addTask = (task) => {
    setTasks([...tasks, { name: task, completed: false }]);
  };

  
  const markCompletedTask = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task ));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskI) => taskI !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        markCompletedTask={markCompletedTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};


export default App;
