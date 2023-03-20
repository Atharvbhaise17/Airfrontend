import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Web1 from './components/Web1'
import Web2 from './components/Web2'
import Web3 from './components/Web3'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {

  return (
    <Fragment>
      <Navbar />
      <Routes>
      <Route path="/register" element={<Web1 />} /> 
      <Route path="/Web2" element={<Web2 />} /> 
      <Route path="/Web3" element={<Web3 />} /> 
      </Routes>
    </Fragment>
  )
}

export default App