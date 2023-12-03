import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Main /> />
          <Route path="/register" element=<Main /> />
          <Route path="/login" element=<Main /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
