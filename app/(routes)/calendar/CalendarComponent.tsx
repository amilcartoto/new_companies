"use client";

import { useState, useEffect } from "react";
import { getEventsForDate, Event as CalendarEvent, addEvent, deleteEvent } from "./events";
import { formatDate } from "./utils";
import { addDays, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [newEvent, setNewEvent] = useState<CalendarEvent>({
    id: "",
    title: "",
    description: "",
    date: selectedDate,
    startTime: "",
    endTime: "",
    category: "task", // Definimos por defecto como "task"
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchedEvents = getEventsForDate(selectedDate);
    setEvents(fetchedEvents);

    // Detectar el tema en el primer renderizado
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    // Escuchar cambios de preferencia de tema del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });

    return () => {
      mediaQuery.removeEventListener("change", () => {});
    };
  }, [selectedDate]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setNewEvent((prev) => ({ ...prev, date })); // Establecer la fecha en la nueva tarea
  };

  const handlePrevMonth = () => {
    setSelectedDate((prev) => addDays(startOfMonth(prev), -1));
  };

  const handleNextMonth = () => {
    setSelectedDate((prev) => addDays(endOfMonth(prev), 1));
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.startTime && newEvent.endTime) {
      addEvent(newEvent);
      setEvents(getEventsForDate(selectedDate)); // Actualizar los eventos al agregar uno nuevo
      setNewEvent({
        id: "",
        title: "",
        description: "",
        date: selectedDate,
        startTime: "",
        endTime: "",
        category: "task",
      }); // Limpiar formulario
    }
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  return (
    <div className={`p-6 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg rounded-lg`}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-xl text-blue-500">
          &#8592; Prev
        </button>
        <h2 className="text-2xl font-semibold">{formatDate(selectedDate)}</h2>
        <button onClick={handleNextMonth} className="text-xl text-blue-500">
          Next &#8594;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((date) => (
          <div
            key={date.toString()}
            onClick={() => handleDateClick(date)}
            className={`p-4 cursor-pointer text-center rounded-lg hover:bg-blue-100 ${
              getEventsForDate(date).length > 0 ? (theme === "dark" ? "bg-blue-400" : "bg-blue-100") : ""
            }`}
          >
            <div className="text-sm font-medium">{date.getDate()}</div>
            <div className="text-xs text-gray-500">{getEventsForDate(date).length} events</div>
          </div>
        ))}
      </div>

      {/* Formulario para agregar tarea */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Create New Task</h3>
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            className={`w-full p-2 border rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            value={newEvent.title}
            onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))} 
          />
          <textarea
            placeholder="Description"
            className={`w-full p-2 border rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            value={newEvent.description}
            onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
          />
          <div className="flex space-x-4">
            <input
              type="time"
              className="p-2 border rounded"
              value={newEvent.startTime}
              onChange={(e) => setNewEvent((prev) => ({ ...prev, startTime: e.target.value }))}
            />
            <input
              type="time"
              className="p-2 border rounded"
              value={newEvent.endTime}
              onChange={(e) => setNewEvent((prev) => ({ ...prev, endTime: e.target.value }))}
            />
          </div>
          <button
            onClick={handleAddEvent}
            className={`mt-4 py-2 px-4 rounded ${theme === "dark" ? "bg-blue-500 text-white" : "bg-blue-300 text-white"}`}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Events for {formatDate(selectedDate)}</h3>
        {events.length > 0 ? (
          <div className="mt-4 space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg">{event.title}</h4>
                <p className="text-gray-600">{event.startTime} - {event.endTime}</p>
                <p className="text-gray-500">{event.description}</p>
                <div className="flex justify-between mt-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      event.category === "meeting" ? "bg-green-200 text-green-800" : ""
                    } ${event.category === "task" ? "bg-yellow-200 text-yellow-800" : ""}`}
                  >
                    {event.category}
                  </span>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
