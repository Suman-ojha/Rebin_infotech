import React from 'react'
import "./App.css"
import Login from './components/Login'
import Home  from './components/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
  <>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
  </>
  )
}

export default App