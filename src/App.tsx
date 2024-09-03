import React, { useEffect, useState } from 'react';
import './App.css';
import Tasklist, { Task } from './Components/Tasklist';
import ChuckNorris from './Components/ChuckNorris/ChuckNorris';

const App: React.FC = () => {
  
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3001/tasks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
        console.log(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
    console.log('fetching tasks');
  }, []);

  return (
    <div className="App">
      <Tasklist tasks={tasks} />
      {/* <ChuckNorris /> */}
    </div>
  );
};

export default App;
