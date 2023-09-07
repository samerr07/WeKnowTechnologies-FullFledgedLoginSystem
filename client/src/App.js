import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import "./styles/home.scss"
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import "./styles/login.scss";
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
        <Header/>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
