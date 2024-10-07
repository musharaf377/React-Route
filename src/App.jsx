import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <footer>It is changes and again new text</footer>
    </>
  )
}

export default App
