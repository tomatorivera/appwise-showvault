import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

const OnlyNavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default OnlyNavLayout