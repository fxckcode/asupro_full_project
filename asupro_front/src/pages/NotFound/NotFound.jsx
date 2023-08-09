import Base from '../../layout/Base'
import './NotFound.scss'
function NotFound() {
  return (
    <Base title="Pagina no encontrada | Asupro">
        <div className="contain__notfound">
            <div className="img__section">
                <img src="./notFound.png" alt="" />
            </div>
            <div className='content__section'>
                <h1>404</h1>
                <span>Página no encontrada</span>
            </div>
        </div>
    </Base>
  )
}

export default NotFound