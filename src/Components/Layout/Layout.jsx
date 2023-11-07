import { Outlet } from "react-router"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <>
        <Header/>
        <div className="container info">
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout