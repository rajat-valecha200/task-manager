import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  currentList: 'All Tasks',
  selectedTask: null
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      state.tasks[index] = action.payload;
    },
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      task.completed = !task.completed;
    }
  }
});

export const { 
  addTask, 
  deleteTask, 
  updateTask, 
  setCurrentList, 
  setSelectedTask, 
  toggleComplete 
} = taskSlice.actions;

export default taskSlice.reducer;