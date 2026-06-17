import { Outlet } from "react-router-dom"
import Navbar from "../ui/Navbar"

const OnlyNavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default OnlyNavLayout