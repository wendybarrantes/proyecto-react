import {Route, BrowserRouter as  Router, Routes } from "react-router-dom"
import Login_Registro from "../paginas/Login_Registro"
import Inicio from "../paginas/Inicio"
import FormularioAgregarProducto from "../componentes/FormularioAgregarProducto"
import Menu from "../paginas/Menu"
const RutasC  = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login_Registro/>}/>
                
                <Route path="/inicio" element={<Inicio/>}/>

                <Route path="/aggProducto" element={<FormularioAgregarProducto/>}/>

                
                <Route path="/menu" element={<Menu/>}/>


            </Routes>
        </Router>
    )
}
export default RutasC