import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setSelectedTask, toggleComplete } from '../features/tasks/taskSlice';
import AddTaskModal from './AddTaskModal';
import TaskDetail from './TaskDetail';

const TaskList = () => {
  const { tasks, currentList } = useSelector(state => state.tasks);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    const today = new Date().toDateString();
    switch(currentList) {
      case 'Today': return task.dueDate === today;
      case 'Important': return task.important;
      default: return true;
    }
  });

  return (
    <div className="main-content">
      <div className="header">
        <h1>{currentList}</h1>
        <button 
          onClick={() => setShowModal(true)} 
          className="add-task-btn primary-btn"
        >
          + Add Task
        </button>
      </div>

      <div className="task-grid">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleComplete(task.id))}
              />
              <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
              <button 
                onClick={() => dispatch(deleteTask(task.id))}
                className="delete-btn"
              >
                ×
              </button>
            </div>
            <div 
              className="task-body" 
              onClick={() => dispatch(setSelectedTask(task))}
            >
              {task.dueDate && (
                <div className="due-date">
                  📅 {new Date(task.dueDate).toLocaleDateString()}
                </div>
              )}
              {task.steps?.length > 0 && (
                <div className="steps-info">
                  Steps: {task.steps.filter(s => s.completed).length}/{task.steps.length}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}
      <TaskDetail />
    </div>
  );
};

export default TaskList;