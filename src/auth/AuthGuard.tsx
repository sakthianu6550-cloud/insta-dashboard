import { Navigate, Outlet } from "react-router-dom"

function AuthGuard(){
    const isActive = !!localStorage.getItem('acess_to')
    console.log(isActive);
    
    return(
        <>
        {isActive ?<Outlet /> : <Navigate to="/login" replace />}
        </>
    )

}
export default  AuthGuard