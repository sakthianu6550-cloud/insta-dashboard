import { Router, useNavigate } from "react-router-dom"

function Login(){
    const router = useNavigate()
    const Login = () =>{
        // alert('yes')
        localStorage.setItem('access_to','apple')
        router('/')
    }
    return(
        <>
        <h1>LOGIN</h1>
        <button onClick={() =>Login()}>login</button>
        </>
    )
}
export default Login