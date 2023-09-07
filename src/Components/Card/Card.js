import React from 'react';
import './Card.css'
import Label from '../Label/Label';
import { VscIssues} from 'react-icons/vsc';
function Card (props) {
    
    //--------COLOCANDO LA PRIMERA LETRA EN MAYUSCULA------
    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //--------COLOCANDO TACHADURA SI LA FECHA ESTA VENCIDA------
    function onTime(date) {
        let fecha;
        let current = Date.parse(date) + 86400000;
        Date.parse(new Date()) >= current ? fecha = "card--container past" : fecha = "card--container";
        return fecha
    }

    //-----------------ELIMINANDO EL CARD-------------------
    const deleteTask = (dato) => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].description === dato) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    //------------------SELECCIONANDO EL COLOR DEL CIRCULO-------------------
    let color;
    const label = (col) => {

        if (col === "urgent") {color = (<Label 
            name = "red"
            icon = <VscIssues/>
            color = "red"
          />)
        } else if (col === "normal"){
            color = (<Label 
                name = "green"
                icon = <VscIssues/>
                color = "green"
              />)
        } else if (col === "medium"){
            color = (<Label 
                name = "blue"
                icon = <VscIssues/>
                color = "blue"
              />)
        }
    }
    return(
        <div className ={onTime(props.date)}>
            <div className="card-label" onLoad={label(props.label)}>{color}</div>
            <div className="card-info">
                <h2 className="card-name">
                {capitalizarPrimeraLetra(props.name)}</h2>
                <p className="card-task">{capitalizarPrimeraLetra(props.task)}</p>
            </div>
            <div className="card-date">{props.date}</div>
            <button type="submit" className="card-delete" onClick={(e)=>{deleteTask(props.task)

            }}>{props.image}</button>
        </div>
    )
}
export default Card