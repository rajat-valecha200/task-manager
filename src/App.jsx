import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app-container">
      <Sidebar />
      <TaskList />
    </div>
  );
}

export default App;