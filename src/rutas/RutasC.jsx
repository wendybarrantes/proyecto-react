import {Route, BrowserRouter as  Router, Routes } from "react-router-dom"
import Login_Registro from "../paginas/Login_Registro"
import Inicio from "../paginas/Inicio"
const RutasC  = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login_Registro/>}/>
                
                <Route path="/inicio" element={<Inicio/>}/>



            </Routes>
        </Router>
    )
}
export default RutasC