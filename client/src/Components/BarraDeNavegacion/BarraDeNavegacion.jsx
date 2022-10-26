import React from 'react'
import { Link} from "react-router-dom";
import  { useLocation} from "react-router-dom"
import creacion from "../../imagenes/creacion.jpg";
import logo from "../../imagenes/PgInicial.jpg";
import style from "./BarraDeNavegacion.module.css"

const BarraDeNavegacion = () => {
    let location = useLocation();

    if(location.pathname === "/home"){
        return (
            <div className={style.contenedor}>
                <Link className={style.link} to="/">
                    <img className={style.logo} src={logo} alt="logo"/>   
                </Link>
                <Link className={style.link} to="/formulario">
                    <img className={style.formulario} src={creacion} alt="icono de creacion"/>
                    <p className={style.formulario_Text}>Crear una nueva receta</p>
                </Link>
            </div>
        )
    }else{
        return(
            <div className={style.contenedor}>
                <Link to="/">
                    <img className={style.logo} src={logo} alt="logo"/>
                </Link>
                <Link className={style.volver} to="/home">
                   volver al home
                </Link>
            </div>
        )
    }   
}

export default BarraDeNavegacion