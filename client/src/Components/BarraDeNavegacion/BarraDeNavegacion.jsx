import React from 'react'
import { Link} from "react-router-dom";
import  { useLocation} from "react-router-dom"
import creacion from "../../Images/Create.png";
import logo from "../../Images/Home.png";
import "./BarraDeNavegacion.css"

const BarraDeNavegacion = () => {
    let location = useLocation();

    if(location.pathname === "/home"){
        return (
            <div className='contenedorB'>
                <Link className='link' to="/">
                    <img className='logo' src={logo} alt="logo"/>   
                </Link>
                <Link className='link' to="/create">
                    <img className='formulario' src={creacion} alt="icono de creacion"/>
                    <p className='formulario_Text'>Crear Actividad</p>
                </Link>
            </div>
        )
    }else{
        return(
            <div className='contenedor'>
                <Link to="/home">
                    <img className='logo' src={logo} alt="logo"/>
                </Link>
            </div>
        )
    }   
}

export default BarraDeNavegacion