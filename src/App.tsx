import React from 'react';
import { Routes, Route } from 'react-router';
import { Landing } from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
  );
};

export default App;
