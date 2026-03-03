import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidemenu from "./Sidemenu"
import Summary from "./Summary"
import Design from "./Design"
import "./Layout.css"


function Layout(){
    return(
        <> 
        <div className="main-layout">
        <div className="header-layout"><Header />
        </div>
        <div className="body-layout">
        <div className="sidemenu-layout"><Sidemenu /> </div>
        <Outlet />
        </div>
        </div>
        </>
        
    )
}
export default Layout