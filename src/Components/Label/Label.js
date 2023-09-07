import './Label.css'
import React from 'react'
import { RiFlag2Fill } from 'react-icons/ri'

function Label (props) {

    return (
        <div className="label--container">
            <div className={`circle ${props.color}`}>
            <RiFlag2Fill/>
            </div>
        </div>
    )
} 

export default Label