export const Todo = (title, description, dueDate, priority, notes) => {
  let completed = false;
  const completeToggle = () => {
    completed = !completed;
  };

  const getStatus = () => {
    return completed;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    getStatus,
    completeToggle,
  };
};
