// routes/calendar/event.ts
// routes/calendar/event.ts

export type Event = {
    id: string;
    title: string;
    description: string;
    date: Date;
    startTime: string;
    endTime: string;
    category: string; // Ejemplo: "meeting", "task", "deadline", etc.
  };
  
  // Obtener los eventos almacenados en localStorage o devolver un array vacío si no existen
  const getStoredEvents = (): Event[] => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  };
  
  // Guardar los eventos en localStorage
  const saveEventsToStorage = (events: Event[]) => {
    localStorage.setItem("events", JSON.stringify(events));
  };
  
  // Función para agregar un evento
  export const addEvent = (event: Event) => {
    const events = getStoredEvents();
    events.push(event);
    saveEventsToStorage(events);
  };
  
  // Función para obtener los eventos de un día específico
  export const getEventsForDate = (date: Date): Event[] => {
    const events = getStoredEvents();
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toLocaleDateString() === date.toLocaleDateString();
    });
  };
  
  // Función para eliminar un evento
  export const deleteEvent = (eventId: string) => {
    let events = getStoredEvents();
    events = events.filter(event => event.id !== eventId);
    saveEventsToStorage(events);
  };
  
  // Función para actualizar un evento
  export const updateEvent = (updatedEvent: Event) => {
    const events = getStoredEvents();
    const index = events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      events[index] = updatedEvent;
      saveEventsToStorage(events);
    }
  };
  