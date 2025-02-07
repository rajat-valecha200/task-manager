# React To-Do Application

A modern task management web application built with React, Redux, and Vite. Features task creation, due dates, subtasks, multiple views, and persistent local storage.

## Features

- Create tasks with titles, due dates, and subtasks
- Organize tasks into different views: All Tasks, Today, Important
- Mark tasks as complete/incomplete
- Delete tasks
- Detailed task view with subtask management
- Local storage persistence
- Responsive UI

## Installation

1. Clone the repository
```bash
git clone https://github.com/rajat-valecha200/task-manager.git
```

2. Install dependencies
```bash
cd task-manager
npm install
```

3. Run the application
```bash
npm run dev
```

## Technologies Used

- React + Vite
- Redux Toolkit (State Management)
- React Router (Navigation)
- date-fns (Date formatting)
- Material-UI (Icons and Styling)
- React Datepicker

## Project Structure

```
src/
├── components/      # Reusable components
├── features/        # Redux slice and logic
├── app/             # Redux store configuration
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## Usage

1. **Add Task**  
   Click "+ Add Task" button ➔ Enter title ➔ Set due date ➔ Add subtasks

2. **Manage Tasks**  
   - Checkbox: Mark complete/incomplete
   - Click task card: View/edit details
   - Trash icon: Delete task

3. **Switch Views**  
   Use sidebar to switch between:
   - All Tasks
   - Today's Tasks
   - Important Tasks