import React from 'react';
import Select from 'react-select';
import './Selector.scss'

const CustomSelector = (props) => {

    

    return (
        <div className = 'selectorContainer'>
            <label className = 'selectorLabel'>{props.title}</label>
            <Select
                name = {props.name}
                options={props.options}
                // placeholder = {props.placeholder}
                onChange={props.change}
                defaultValue={props.defaultValue}
                value = {props.value}

                />
        </div>
    )
}

export default CustomSelector
