import "./NavBar.css"
import CartWidget from "../CarWidget/CartWidget"
import logo from "./assets/logo.png"
import { Link, NavLink } from "react-router-dom"
const NavBar=() =>{
  

    return (
      <>
        <nav className="navBar">
          <div className="NameLogo">
            <Link to="/">
            <h3>TiendaReact</h3>
            </Link>
            <img id="logo" src={logo} alt="logo tienda" />
            </div>
          <div className="navSeccion2">
            <NavLink to={`/category/Camisetas`} className="Boton">camisetas</NavLink>
            <NavLink to={`/category/Buzos`} className="Boton">buzos</NavLink>
            <NavLink to={`/category/Vestidos`} className="Boton">vestidos</NavLink>
            <NavLink to={`/category/Pantalones`} className="Boton">pantalones</NavLink>
            <Link to="/cart" className="Boton">
            <CartWidget />
            </Link>
          </div>
          
        </nav>
      </>
    )
  }
  
  export default NavBar