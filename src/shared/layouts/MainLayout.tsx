import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default MainLayout
