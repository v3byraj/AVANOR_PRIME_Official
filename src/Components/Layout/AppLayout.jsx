import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Navbar } from "../UI/Navbar"


export const AppLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet />
        <Footer />
        </>
    )
}