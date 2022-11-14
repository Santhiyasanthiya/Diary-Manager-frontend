import React from 'react'
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateNotes from './CreateNotes';
import ForgetPassword from './ForgetPassword';
import Login from './Login';
import Portal from './Portal';
import SignUp from './SignUp';
import Dairy from './Dairy';
import ViewNotes from './ViewNotes';
import EditNotes from './EditNotes';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/portal" element={<Portal />} >
          <Route path='home' element={<Home/>} />
          <Route path="create-notes" element={<CreateNotes/>} />
          <Route path="dairy" element={<Dairy/>} />
          <Route path="dairy/view/:id" element={<ViewNotes/>} />
          <Route path="dairy/edit/:id" element={<EditNotes/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
