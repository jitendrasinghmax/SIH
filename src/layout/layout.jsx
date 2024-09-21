import { Outlet } from "react-router-dom"
import Headder from "../component/headder"
export default()=>{
    return(<>
    {/*header*/}
    <Headder/>

    {/*body*/}
    <Outlet/>

    {/* footer */}

    </>)
}