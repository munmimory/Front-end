import React from 'react';
import './App.css';
import UserTable from './components/UsersTable';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  return (
    <div className="App">
      <DarkModeToggle />
      <h1>User Management</h1>
      <UserTable />
    </div>
  );
};

export default App;
