import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import useMobileNav from '../../hooks/useMobileNav';
function Navbar() {
    const [isClosed, toggleNav] = useMobileNav();
  return (
    <nav>
        <div className="margin">
            <div className="home__logo">
            <span>Asupro</span>
            </div>
            <ul className="navegation">
                <li><NavLink exact to="/" activeClassName='active'>Inicio</NavLink></li>
                <li><NavLink to="/products" activeClassName='active'>Productos</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>Sobre Nosotros</NavLink></li>
                <li><Link to="/login" className='login'>Ingresar</Link></li>
            </ul>
            {/* <div className="min__about">
                <div className="call_area">
                    <div className="text">
                        <span>Necesitas ayuda?</span>
                        <h3>+12 1234567890</h3>
                    </div>
                    <div className="icon_call">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                </div>
                <Link to="https://google.com" target='_blank'>
                    <div className="location_area">
                        <div className="text">
                            <h3>Ubicación</h3>
                        </div>
                        <div className="icon_ubi">
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </div>
                    </div>
                </Link>
            </div> */}
            <div className="icon_mobile" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`navegation__mobile ${isClosed ? 'close' : ''}`}>
                <li><NavLink exact to="/" activeClassName='active'>Inicio</NavLink></li>
                <li><NavLink to="/products" activeClassName='active'>Productos</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>Sobre Nosotros</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar