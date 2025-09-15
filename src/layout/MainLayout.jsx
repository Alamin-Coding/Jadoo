import { Outlet } from "react-router"
import Navbar from "../componets/Navbar"
const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default MainLayout
