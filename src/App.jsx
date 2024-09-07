import React from 'react'
import Header from './Components/header'
import Footer from './Components/Footer'
import './App.css'
import GetUsers from './Components/GetUsers'


function App() {
  return (
    <div>
      <Header/>
      <GetUsers/>
      <Footer/>
    </div>
  )
}

export default App