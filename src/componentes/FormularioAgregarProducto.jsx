
import { useState } from 'react'
import '../estilos/FormularioAggProducto.css'
import { postData } from '../servicios/fetch'
const FormularioAgregarProducto = ()=>{
  const [img,setImg] = useState('')
  const [nombrePlato,setNombrePlato] = useState('')
  const [precio,setPrecio]= useState('')
  const [descripcion,setDescripcion]=useState('')
  const [categoria,setCategoria] = useState('')

  const agregarPlatillo = async()=>{
    if(img.trim() === '' || nombrePlato.trim() === '' || precio.trim() === '' || descripcion.trim() === '' || categoria.trim() === ''){
        alert('Todos los campos son obligatorios') //HAY QUE CAMBIAR ESTO POR UN MODAL
        return
    }else{
        const platillo = {
            imagen: img,
            nombre: nombrePlato,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria
        }
        await postData(platillo,"productos")
    }
}



  // Maneja la carga y vista previa de la imagen seleccionada.
const subirImg = () => {
const file = document.getElementById("upload-file").files[0];
const reader = new FileReader();
if (file) {
    reader.onload = function(e) {
        setImg(e.target.result);
    };
    reader.readAsDataURL(file);
}
};

    return (
        <div className="form-container">
          <h2>Agregar Nuevo Plato</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image">Archivo de la Imagen:</label>
              <input
                type="file"
                id="upload-file"
                name="image"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={subirImg}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre del Plato:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={(e)=> setNombrePlato(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                required
                onChange={(e)=> setPrecio(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                required
                onChange={(e)=> setDescripcion(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoría:</label>
              <select
                id="category"
                name="category"
                required
                onChange={(e)=> setCategoria(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="entrada">Entrada</option>
                <option value="plato_principal">Plato Principal</option>
                <option value="postre">Postre</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
            <button type="button" onClick={agregarPlatillo}>Agregar Plato</button>
          </form>
        </div>
      )
    }
export default FormularioAgregarProducto
