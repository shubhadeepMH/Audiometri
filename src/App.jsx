import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Pdf from './pages/Pdf'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/pdf' element={<Pdf/>} />
      </Routes>
    </BrowserRouter>
  )
}
