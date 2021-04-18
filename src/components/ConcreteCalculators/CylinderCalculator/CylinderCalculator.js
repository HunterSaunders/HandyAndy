import '../Calculator.scss';
import Select from 'react-select';
import { useState } from 'react';
import Cylinder from '../../images/cylinderDiag.png'
import { useInputChange } from '../../InputChange'

const CylinderCalculator = () => {

  const units = [
    {label: 'ft' , value: 1},
    {label: 'in' , value: 12},
    {label: 'm' , value: 0.3048},
    {label: 'cm' , value: 30.48},
];

const [input, setInput] = useInputChange();

const [unit, setUnit] = useState({
  diameterUnit : 1,
  cylinderHeightUnit : 1,
})

const onDataChange=(option, action) => {
    setUnit({
        ...unit,
        [action.name]: option.value
    })
}

let calculatedValue = Math.PI * ((input.diameter / unit.diameterUnit) / 2 ) * ((input.diameter / unit.diameterUnit) / 2 ) * (input.cylinderHeight / unit.cylinderHeightUnit)

    return (
        <div className = 'calculatorContainer'>
            <h4 className = 'calculatorHeader'>Pillars, Round Footings</h4>
            <img className = 'calculatorDiagram' src = {Cylinder} alt = '3D Cylinder Icon' />

            <div className = 'formContainer'>

                <div className = 'inputContainer'>
                <label className = 'calculatorDimensionTitle'>Height (h)</label>
                    <input type = 'number' name = 'cylinderHeight' className = 'calculatorInput' required onChange = {setInput}/>
                    <Select
                        name = 'cylinderHeightUnit'
                        options={units}
                        onChange={onDataChange}
                        value = {units.value}
                        defaultValue = {{label: 'ft' , value: 1}}
                        styles={customStyles}
                    />
                </div>

                <div className = 'inputContainer'>
                    <label className = 'calculatorDimensionTitle'>Diameter (d)</label>
                    <input type = 'number' name = 'diameter' className = 'calculatorInput' required onChange = {setInput}/>
                    <Select
                        name = 'diameterUnit'
                        options={units}
                        onChange={onDataChange}
                        value = {units.value}
                        defaultValue = {{label: 'ft' , value: 1}}
                        styles={customStyles}
                    />
                </div>

                {/* <button className = 'calculatorBtn' onClick = {feetCalculate}>Calculate</button> */}


            </div>
                <div className = 'calculatorOutput'>
                    <p className = 'calculatorTotalHeader'>Calculated Totals</p>

                    <p className = 'calculatorOtputLine'><span className = 'outputValue'> {  ( calculatedValue / 27 ).toFixed(3) } </span> Cubic Yards</p>
                    <p className = 'calculatorOtputLine'><span className = 'outputValue'> {  ( calculatedValue ).toFixed(3)  } </span> Cubic Feet</p>

                </div>
        </div>
    )
}

export default CylinderCalculator



const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    minHeight: '30px',
    height: '30px',
    width: '75px',
    boxShadow: state.isFocused ? null : null,
  }),

  option: (provided) => ({
      ...provided,
      color: 'black'
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    padding: '0 2px',
  }),
  
  
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
  }),
};