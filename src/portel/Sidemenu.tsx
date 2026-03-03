import { useLocation, useNavigate } from "react-router-dom"
import "./Sidemeno.css"
import { useState } from "react"

function Sidemenu() {
    const [ count, setCount ] = useState(1)
    const currentPath = useLocation()
    const [ currentNav,setcurrentNav] = useState(currentPath.pathname.split('/')).filter(Boolean);
       const countPlus =()=>{
            setCount(count+1)
        }
 const router = useNavigate()
    const currentstatus = false
    const moveFun = (value:any) => {
        console.log(value);
        if (value== 1){
            setcurrentNav('detail')
            router('/detail')
        }
        else{
            setcurrentNav('summary')
            router('/summary')
        }
     
}
return(
    <>
    {/* <h1> {count}</h1>
    <button onClick={()=>countPlus()}>+1</button> */}
    <h1>sidemenu</h1>
    <div className={`sidenav ${currentNav == 'detail' && 'activestatus'}` } onClick={()=>moveFun(1)}>details</div>
    <div className={`sidenav ${currentNav == 'summary' && 'activestatus'}` } onClick={()=>moveFun(2)}>summary</div>
    {/* <p className="d-bg para1 para2">para1</p>
    <p className={`${currentstatus ? 'para1':'para2'}`}>csss</p> */}

    {/* <div> <button onClick={() =>moveFun(1)}>details</button>
        </div>
        <div>
         <button onClick={() =>moveFun(2)}>summary</button>
    
         </div> */ }
    
       </>
)
}
export default Sidemenu