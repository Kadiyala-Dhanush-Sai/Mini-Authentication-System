import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignUp from './signup';
import Login from './login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
