import { useDispatch } from 'react-redux';
import { setCurrentList } from '../features/tasks/taskSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const lists = ['All Tasks', 'Today', 'Important', 'Planned', 'Assigned to me'];

  return (
    <div className="sidebar">
      <h2>Hey, ABCD</h2>
      <ul className="nav-list">
        {lists.map(list => (
          <li 
            key={list}
            onClick={() => dispatch(setCurrentList(list))}
            className="nav-item"
          >
            {list}
          </li>
        ))}
      </ul>
      <button className="add-list-btn">+ Add list</button>
    </div>
  );
};

export default Sidebar;