import React, { useState } from 'react'
import './FilterBar.scss'
import CustomSelector from './Selectors/CustomSelector';


const FilterBar = ({setTruckType , setMaterialType} ) =>  {

    const typeOptions = [
        {label: 'Choose Type' , value: 'def'},
        {label: 'Van' , value: 'van'},
        {label: 'Pick Up' , value: 'pu'},
        {label: 'Box' , value: 'box'},
        {label: 'Liftgate' , value: 'lift'},
        {label: 'Rack' , value: 'rack'},
        {label: 'Flatbed' , value: 'fb'},
        {label: 'Debris Dump' , value: 'debris'},
        {label: 'Heavy Dump' , value: 'heavy'},
    ];

    const materialOptions = [
        {label: 'Choose Material' , value: 'def'},
        {label: 'Dirt' , value: 'dirt'},
        {label: 'Concrete' , value: 'concrete'},
        {label: 'Gravel' , value: 'gravel'},
        {label: 'Sod' , value: 'sod'},
        {label: 'Wood Chips' , value: 'chips'},
        {label: 'Yard Waste' , value: 'yard-waste'},
        {label: 'Construction Debris' , value: 'con-debris'},
        {label: 'Household Waste' , value: 'house-waste'},
        {label: 'Dirt' , value: 'dirt'},
        {label: 'Dirt' , value: 'dirt'},
    ];

    const [filter, setFilter] = useState({
        type: 'def',
        material: 'def'
    }) 


    const onFilterChange=(option, action) => {
        setFilter({
            ...filter,
            [action.name]: option.value
        })
    }


    const onFilterBtn = () =>{
        setTruckType(filter.type);
        setMaterialType(filter.material);
    }

    // console.log(filter.type, filter.material)


   


    return (

        <div className = 'filterBarContainer'>

            <CustomSelector 
                title = 'Truck Type'
                name = 'type'
                // placeholder = 'Choose Type'
                options = {typeOptions}
                value = {typeOptions.value}
                change = {onFilterChange}
                defaultValue=  {typeOptions[0]}
            />

            <CustomSelector 
                title = 'Materials'
                name = 'material'
                // placeholder = 'Choose Material'
                options = {materialOptions}
                change = {onFilterChange}
                defaultValue=  {typeOptions[0]}
            />

            <div className = 'filterBtnContainer'>
                <div className = 'filterBtn' onClick ={onFilterBtn}>
                    Filter
                </div>
            </div>



        </div>
    )
}

export default FilterBar
