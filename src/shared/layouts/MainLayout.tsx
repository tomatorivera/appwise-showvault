import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  )
}

export default MainLayout
