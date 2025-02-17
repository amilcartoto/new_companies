// routes/calendar/utils.ts

// Función para formatear fechas a un formato legible
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  // Función para comparar si dos fechas son el mismo día
  export const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.toLocaleDateString() === date2.toLocaleDateString();
  };
  
  // Función para obtener el primer día de la semana (domingo, por ejemplo)
  export const getFirstDayOfWeek = (date: Date): Date => {
    const firstDay = new Date(date);
    const dayOfWeek = firstDay.getDay();
    firstDay.setDate(firstDay.getDate() - dayOfWeek);
    return firstDay;
  };
  
  // Función para obtener el último día de la semana (sábado, por ejemplo)
  export const getLastDayOfWeek = (date: Date): Date => {
    const lastDay = new Date(date);
    const dayOfWeek = lastDay.getDay();
    lastDay.setDate(lastDay.getDate() + (6 - dayOfWeek));
    return lastDay;
  };
  