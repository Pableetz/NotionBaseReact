import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TasklistProps {
  tasks: Task[];
}

const Tasklist: React.FC<TasklistProps> = ({ tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = (completed: boolean) => {
    setFilteredTasks(tasks.filter((task) => task.completed === completed));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilter(true)}>Completed</button>
        <button onClick={() => handleFilter(false)}>Not Completed</button>
        <button onClick={() => setFilteredTasks(tasks)}>All</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <TaskForm />
    </div>
  );
};

export default Tasklist;
