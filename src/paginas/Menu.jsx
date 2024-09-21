import { useEffect, useState } from "react";
import { getData } from "../servicios/fetch";
import ListaCards from "../componentes/ListaCards";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()
    const [platillos,setPlatillos] = useState([])
    useEffect(()=>{
        const traerPlatillos = async()=>{
            const datos = await getData("productos")
            setPlatillos(datos)
        }
        traerPlatillos()
    },[])

    return (
        <div>
            <h1>Menu</h1>
            <ListaCards platillos={platillos}/>

            <button className="btn btn-primary" onClick={()=>{navigate("/agregar")}}>Agregar un nuevo producto</button>
        </div>
    );
}
export default Menu