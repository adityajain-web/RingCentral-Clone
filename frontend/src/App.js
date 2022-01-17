import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, Messenger } from './Components/Components'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Messenger />} />
        <Route path="/messenger/login" element={<Login />} />
        <Route path="/messenger/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
