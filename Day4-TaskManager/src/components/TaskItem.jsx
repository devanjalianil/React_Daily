function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className={`task ${task.completed ? "done" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;
