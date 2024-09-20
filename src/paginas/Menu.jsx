import { useEffect, useState } from "react"
import { getData } from "../servicios/fetch"
import ListaCards from "../componentes/ListaCards"

const Menu = () =>{
const [platillos,setPlatillos] = useState ([])

useEffect (() =>{
    const traerPlatillos = async ()=> {
        const datos = await getData ("productos")
        setPlatillos (datos)
 
    }
    traerPlatillos()

},[])

    return(
        <div>

        <h1>MENU</h1>
        
        <ListaCards platillos= {platillos}/>

        </div>
    )
}
export default Menu