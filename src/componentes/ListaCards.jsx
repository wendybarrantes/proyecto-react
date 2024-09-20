import CardPlatillo from "./CardPlatillo"

const ListaCards = ({platillos}) => {
    return(
        <div>
        {platillos.map((platillo)=> {
            return(
                <CardPlatillo
                key={platillo.id}
                img={platillo.imagen}
                nombre={platillo.nombre}
                precio={platillo.precio}
                descripcion={platillo.descripcion}
                categoria={platillo.categoria}
                />
            )
        })}
        </div>
    )
}
export default ListaCards