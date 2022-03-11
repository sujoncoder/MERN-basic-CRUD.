import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
