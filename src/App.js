import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout } from './components/Layout';
import { TeachersPage } from './pages/TeachersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
