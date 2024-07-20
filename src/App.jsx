
import './App.css'
import FooterAdd from './components/FooterAdd/FooterAdd.jsx'
import SideHeader from './components/SideHeader/SideHeader.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (

    <div className='app-container'>
      <div className="app-index-container">
        <SideHeader />
        <Outlet />
      </div>
      <FooterAdd />
    </div>

  )
}

export default App
