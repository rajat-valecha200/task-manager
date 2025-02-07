import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask, updateTask } from '../features/tasks/taskSlice';

const TaskDetail = () => {
  const { selectedTask } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSelectedTask(null));
  };

  const toggleStep = (index) => {
    const updatedSteps = selectedTask.steps.map((step, i) => 
      i === index ? { ...step, completed: !step.completed } : step
    );
    dispatch(updateTask({ ...selectedTask, steps: updatedSteps }));
  };

  if (!selectedTask) return null;

  return (
    <div className="task-detail-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{selectedTask.title}</h2>
          <button onClick={handleClose} className="close-btn">×</button>
        </div>

        <div className="task-content">
          {selectedTask.dueDate && (
            <div className="due-date">
              <strong>Due Date:</strong> {new Date(selectedTask.dueDate).toLocaleDateString()}
            </div>
          )}

          <div className="steps-section">
            <h3>Steps:</h3>
            {selectedTask.steps?.map((step, index) => (
              <div key={index} className="step-item">
                <input
                  type="checkbox"
                  checked={step.completed}
                  onChange={() => toggleStep(index)}
                />
                <span className={step.completed ? 'completed' : ''}>{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;