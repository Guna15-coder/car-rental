import React from 'react'
import Land from "./pages/Land"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarDetail from './components/CarDetail'

const App = () => {
  return (
    <div className='font-open'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/car' element={<CarDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App