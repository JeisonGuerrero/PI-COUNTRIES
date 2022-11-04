import React, {useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import {formularioDeCreacion,getActivities} from "../../Redux/Actions"
import "./Create.css"
import validate from "../../Components/Validate/Validate"
import BarraDeNavegacion from '../../Components/BarraDeNavegacion/BarraDeNavegacion';

function Create(){

    const dispatch = useDispatch()
    const allCountries=useSelector(state=>state.countries)
    
    let ListaDePaises=allCountries.map(e=>{
        return({
            name:e.name,
            flag:e.flags,
        })
    })
    const [select,setSelect]=useState("")
    const [errors,setErrors]=useState({firstTry:true})
    const [formulario,setFormulario]=useState({
        name:"", dificulty:"", season:"",countries:[],duration:""
    })
    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])


    function handleChange(e){
        setFormulario({ 
            ...formulario,
            [e.target.name] : e.target.value
        })
        if(!errors.firstTry){
            setErrors(validate({
                ...formulario,
                [e.target.name]:e.target.value
            }))
        }
    }

    function handleSeasons(e){
        if(e.target.value !== "Seleccionar" && !formulario.season.includes(e.target.value)){
            setFormulario({
                ...formulario,
                 season:e.target.value
            })
            if(!errors.firstTry){
                setErrors(validate({
                    ...formulario,
                     season:e.target.value
                }))
            }
        }
    }

    function handleCountries(e){
        if(e.target.value !== "Seleccionar" && !formulario.countries.includes(e.target.value)){
            setFormulario({
                ...formulario,
                countries:[...formulario.countries,e.target.value]
            })
            if(!errors.firstTry){
                setErrors(validate({
                    ...formulario,
                    countries:[...formulario.countries, e.target.value]
                }))
            }
        }
    }

    function deleteCountry(e){
        setFormulario({
            ...formulario,
            countries:formulario.countries.filter(countries=>countries !== e.target.value)
        })
        if(!errors.firstTry){
            setErrors(validate({
                ...formulario,
                countries:formulario.countries.filter(countries=>countries !== e.target.value)
            }))
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formulario.name && formulario.dificulty && formulario.duration && formulario.season && formulario.countries.length>=1){
        dispatch(formularioDeCreacion(formulario))
        alert("Se ha creado la actvidad")
        setFormulario({
            name:"",dificulty:"", season:"",countries:[],duration:""
        })
        errors.firstTry=false
        }
        if(errors.firstTry){
            alert("complete los campos correspondientes")
        }
    }
    function handleE(e) {
        e.preventDefault();
        setErrors(validate({
            ...formulario,
            [e.target.name]: e.target.value,
            countries: [...formulario.countries, e.target.value]
        }))
        handleSubmit(e)
    }
    
    return(
        <div className="newActivity">
            <BarraDeNavegacion/>
            <form className="formActivty" onSubmit={e=>handleSubmit(e)}>
            <h1 className="Create">Crea la nueva actividad</h1>
                <div className="info">
                    <label>name:</label>
                    <input
                    type="text"
                    value={formulario.name}
                    name="name" 
                    onChange={e=>handleChange(e)}
                    placeholder="Inserte valor..."
                    />
                </div>
                <br/>
                <div className="info">
                <label>dificulty (De 1 a 5):</label>
                    <input
                    type="text"
                    value={formulario.dificulty}
                    name="dificulty" 
                    onChange={e=>handleChange(e)}
                    placeholder="Inserte valor..."
                    />
                </div>
                <br/>
                <div className="info">
                    <h3> season</h3>
                    <select onChange={e=>handleSeasons(e)}>
                        <option>Seleccionar</option>
                        <option value="Primavera">Primavera</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                    </select>
                </div>
                <br/>
                <div className="info">
                    <label>duration(de 24 Horas)</label>
                        <input
                        type="text"
                        name="duration"
                        value={formulario.duration}
                        onChange={e=>handleChange(e)}
                        placeholder="Inserte valor..."
                        />
                </div>
                <br/>
                <div className="info">
                    <h3>Paises</h3>
                    <select value={select} onChange={e=>[handleCountries(e),setSelect(e)]}>
                    <option>Seleccionar</option>
                    {ListaDePaises?.sort((a,b)=>{
                        if(a.name<b.name) return -1;
                        if(a.name>b.name) return 1
                        return 0
                    }).map(country=>{
                        return(
                            <option key={country.name}>
                                {country.name}
                                
                            </option>
                        )
                    })}
                    </select>
                </div>
                <br/>
                <div className="displayCountries">
                    {formulario.countries.map((country)=>{
                        return(
                            <div className="eachCountry" key={country}>
                            <p className="countryName">{country}</p>
                            <button className="closeButton" onClick={e=>deleteCountry(e)} value={country}>X</button>
                            </div>
                        )
                    })}
                </div>
                <br/>
                <div>
                    {errors.name || 
                    errors.activity || 
                    errors.duration || 
                    errors.season || 
                    errors.countries ?
                    <button  disabled>Crear Actividad</button>
                    :<button className="Boton" onClick={e => handleE(e)}>Crear Actividad</button>}
                    </div>
                {/* <button onClick={e=> handleC(e)}>XD</button> */}
                <br/>
            </form>
        </div>
    )
}
export default Create