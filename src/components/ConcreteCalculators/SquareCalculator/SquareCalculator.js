import '../Calculator.scss';
import Select from 'react-select';
import { useState } from 'react';
import Box from '../../images/boxDiag.png'
import { useInputChange } from '../../InputChange'

const SquareCalculator = () => {

    const units = [
        {label: 'ft' , value: 1},
        {label: 'in' , value: 12},
        {label: 'm' , value: 0.3048},
        {label: 'cm' , value: 30.48},
    ];

    
    const [input, setInput] = useInputChange();



    const [unit, setUnit] = useState({
        lengthUnit : 1,
        heightUnit : 1,
        widthUnit : 1,
    })

    const onDataChange=(option, action) => {
        setUnit({
            ...unit,
            [action.name]: option.value
        })
    }

    let calculatedValue = (input.length / unit.lengthUnit) * (input.height / unit.heightUnit ) * (input.width / unit.widthUnit)

    


    

    return (
        <div className = 'calculatorContainer'>
            <h4 className = 'calculatorHeader'>Slab, Walls, Square Footing</h4>
            <img className = 'calculatorDiagram' src = {Box} alt = '3D Square Icon' />

            <div className = 'formContainer'>

                <div className = 'inputContainer'>
                <label className = 'calculatorDimensionTitle'>Height (h)</label>
                    <input type = 'number' name = 'height' className = 'calculatorInput' required onChange = {setInput}/>
                    <Select
                        name = 'heightUnit'
                        options={units}
                        onChange={onDataChange}
                        value = {units.value}
                        defaultValue = {{label: 'ft' , value: 1}}
                        styles={customStyles}
                    />
                </div>

                <div className = 'inputContainer'>
                    <label className = 'calculatorDimensionTitle'>Width (w)</label>
                    <input type = 'number' name = 'width' className = 'calculatorInput' required onChange = {setInput} />
                    <Select
                        name = 'widthUnit'
                        options={units}
                        onChange={onDataChange}
                        value = {units.value}
                        defaultValue = {{label: 'ft' , value: 1}}
                        styles={customStyles}
                    />
                </div>

                <div className = 'inputContainer'>
                    <label className = 'calculatorDimensionTitle'>Length (l)</label>
                    <input type = 'number' name = 'length' className = 'calculatorInput' required onChange = {setInput} />
                    <Select
                        name = 'lengthUnit'
                        options={units}
                        onChange={onDataChange}
                        value = {units.value}
                        defaultValue = {{label: 'ft' , value: 1}}
                        styles={customStyles}
                    />
                </div>

                {/* <button className = 'calculatorBtn' onClick = '{}'>Calculate</button> */}


            </div>
                <div className = 'calculatorOutput'>
                    <p className = 'calculatorTotalHeader'>Calculated Totals</p>

                    <p className = 'calculatorOtputLine'><span className = 'outputValue'> {  ( calculatedValue / 27 ).toFixed(3) } </span> Cubic Yards</p>
                    <p className = 'calculatorOtputLine'><span className = 'outputValue'> {  ( calculatedValue ).toFixed(3)  } </span> Cubic Feet</p>

                </div>
        </div>
    )
}

export default SquareCalculator



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