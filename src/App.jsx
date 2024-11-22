import { useState } from 'react'
import './App.css'
import { Outlet, resolvePath } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar></Sidebar>
      <div className='main-content'>
        <Navbar></Navbar>
        <section style={{
          scrollBehavior: "smooth"
        }}>
          <Outlet></Outlet>

        </section>

      </div>
    </>
  )
}

export default App 

