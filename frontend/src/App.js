import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountAList from './components/main/AccountAList';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<AccountAList /> />
          <Route path="/register" element=<Register /> />
          <Route path="/login" element=<Login /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
