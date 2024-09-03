import React from 'react';
import { Task } from './Tasklist';

interface TaskProps {
    task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
    return (
        <div>
            <input type="checkbox" checked={task.completed} />
            <span>{task.name}</span>
        </div>
    );
};

export default TaskCard;