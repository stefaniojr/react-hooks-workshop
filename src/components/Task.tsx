import React, { useState, useCallback } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type ToggleCompletionFunction = (taskId: number) => void;

const TaskList: React.FC = () =>  {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Fazer compras', completed: false },
    { id: 2, text: 'Estudar React', completed: true },
    { id: 3, text: 'Fazer exercícios', completed: false },
  ]);

  const toggleTaskCompletion: ToggleCompletionFunction = useCallback(
    (taskId: number) => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    []
  );

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;