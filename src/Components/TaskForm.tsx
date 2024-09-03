import React, { useState } from 'react';

interface Task {
  id?: number; 
  name: string;
  completed: boolean;
}

const TaskForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      name,
      completed,
    };

    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      console.log(response);

      if (response.ok) {
        setName(''); 
        setCompleted(false);
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Task Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
