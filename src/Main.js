import React,  { useState }  from 'react';
import Header from './Components/Header/Header';
import App from './App'
import Task from './Task'
import './Main.css'



function Main () {
    const [nodle, setNodle] = useState(<Task/>);
    const Change = (selector) => {
        if(selector === "nuevo") {
            setNodle(<App/>)
        } else {
            setNodle(<Task/>)
        }
    }
    return(
        <>
        <div id="main-image"></div>
        <div className="main-header-container">
            <Header />
        </div>
        <div className='section-container'>
            <div className='nav'>
                <button onClick={(e)=>{Change("nuevo")}}>New task</button>
                <button onClick={(e)=>{Change("viejo")}}>Your task</button>
            </div>
            <div className='task-container'>{nodle}</div>
        </div>
        </>
    )
}

export default Main