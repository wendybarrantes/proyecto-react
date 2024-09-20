
import '../estilos/FormularioAggProdcto.css'
const FormularioAgregarProducto = ()=>{

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
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoría:</label>
              <select
                id="category"
                name="category"
                required
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
