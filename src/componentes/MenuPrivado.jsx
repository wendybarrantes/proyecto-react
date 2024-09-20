//creo la funcion para que devuelva verdadero en caso de que el administrador lo sea.
const esAdmin = () => {
const LocalAdmin = localStorage.getItem("admin");
return LocalAdmin
}
/*creo mi componente, pongo children para indicarle que va a tener mi pagina menú adentro
*/

const MenuPrivado = ({children})=>{
    return esAdmin() ? children : <h1>Página no accesible. No tienes los permisos suficientes ERROR 403</h1>
}
export default MenuPrivado;


