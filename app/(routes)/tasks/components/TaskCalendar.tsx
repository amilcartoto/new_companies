"use client";

import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export function TaskCalendar() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState<{ date: Date; task: string }[]>([]);

  const handleDateChange = (newDate: Date | Date[]) => {
    if (!newDate) return;
    const selectedDate = Array.isArray(newDate) ? newDate[0] : newDate;
    setDate(selectedDate);
  };

  const addTask = (task: string) => {
    setTasks([...tasks, { date, task }]);
  };

  const removeTask = (taskToRemove: { date: Date; task: string }) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  return (
    <div>
      <Calendar onChange={(value) => handleDateChange(value as Date | Date[])} value={date} />
      <div>
        <h2>Tareas para {date.toDateString()}</h2>
        <ul>
          {tasks
            .filter(task => task.date.toDateString() === date.toDateString())
            .map((task, index) => (
              <li key={index}>
                {task.task}
                <button onClick={() => removeTask(task)}>Eliminar</button>
              </li>
            ))}
        </ul>
        <button onClick={() => addTask(prompt('Nueva tarea:') || '')}>Agregar Tarea</button>
      </div>
    </div>
  );
} 