import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [steps, setSteps] = useState([]);
  const [stepInput, setStepInput] = useState('');
  const dispatch = useDispatch();

  const handleAddStep = () => {
    if (stepInput.trim()) {
      setSteps([...steps, { text: stepInput.trim(), completed: false }]);
      setStepInput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({
        id: Date.now(),
        title: title.trim(),
        completed: false,
        dueDate: dueDate?.toDateString(),
        steps,
        important: false
      }));
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              required
            />
          </div>

          <div className="form-group">
            <label>Due Date:</label>
            <DatePicker
              selected={dueDate}
              onChange={date => setDueDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div className="form-group">
            <div className="step-input">
              <input
                type="text"
                value={stepInput}
                onChange={(e) => setStepInput(e.target.value)}
                placeholder="Add step"
              />
              <button type="button" onClick={handleAddStep} className="secondary-btn">
                Add Step
              </button>
            </div>
            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <span>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn">Save Task</button>
            <button type="button" onClick={onClose} className="secondary-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;