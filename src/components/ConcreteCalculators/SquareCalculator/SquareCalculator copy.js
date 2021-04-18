import '../Calculator.scss';
import Select from 'react-select';
import { useState } from 'react';
import Box from '../../images/boxDiag.png'

const SquareCalculator = () => {

    const [height, setHeight] = useState(0);

    const [width, setWidth] = useState(0);

    const [length, setLength] = useState(0);

    let hUnit = 'ft';
    let wUnit = 'ft';
    let lUnit = 'ft';

    const units = [
        {label: 'ft' , value: 'ft'},
        {label: 'in' , value: 'in'},
        {label: 'm' , value: 'm'},
        {label: 'cm' , value: 'cm'},
    ];

    const heightChange = () => {
        console.log(height)
    };

    const widthChange = (unit) => {
        wUnit = unit;
    };
    const lengthChange = (unit) => {
        lUnit = unit;
    };

    const [feet, setFeet] = useState(0);

    const setUnitCorrect = (unit, value) => {

        if (unit === 'ft'){
            return value;
        }
        if (unit === 'in'){
            return value /= 12; 
        }
        if (unit === 'm'){
            return value *= 3.28084;
        }
        if (unit === 'cm'){
            return value *= 0.0328084; 
        }

    };


    const feetCalculate = () => {

        setUnitCorrect(hUnit, height);
        setUnitCorrect(wUnit, width);
        setUnitCorrect(lUnit, length);

        console.log(height, width, length)

        let total = length * width * height;
        setFeet(total);
    }

    return (
        <div className = 'calculatorContainer'>
            <h4 className = 'calculatorHeader'>Slab, Walls, Square Footing</h4>
            <img className = 'calculatorDiagram' src = {Box} alt = '3D Square Icon' />

            <div className = 'formContainer'>

                <div className = 'inputContainer'>
                <label className = 'calculatorDimensionTitle'>Height (h)</label>
                    <input type = 'number' name = '' className = 'calculatorInput' required onChange = {event => setHeight = event.target.value}/>
                    <Select
                        options={units}
                        onChange={heightChange()}
                        defaultValue={{label: 'ft' , value: 'ft'}}
                        styles={customStyles}
                    />
                </div>

                <div className = 'inputContainer'>
                    <label className = 'calculatorDimensionTitle'>Width (w)</label>
                    <input type = 'number' name = '' className = 'calculatorInput' required onChange = {event => width = event.target.value}/>
                    <Select
                        options={units}
                        onChange={widthChange()}
                        defaultValue={{label: 'ft' , value: 'ft'}}
                        styles={customStyles}
                    />
                </div>

                <div className = 'inputContainer'>
                    <label className = 'calculatorDimensionTitle'>Length (l)</label>
                    <input type = 'number' name = '' className = 'calculatorInput' required onChange = {event => length = event.target.value}/>
                    <Select
                        options={units}
                        onChange={lengthChange()}
                        defaultValue={{label: 'ft' , value: 'ft'}}
                        styles={customStyles}
                    />
                </div>

                <button className = 'calculatorBtn' onClick = {feetCalculate}>Calculate</button>


            </div>
                <div className = 'calculatorOutput'>
                    <p className = 'calculatorTotalHeader'>Calculated Totals</p>

                    <p className = 'calculatorOtputLine'>{ ( feet / 27 ).toFixed(2) } Cubic Yards</p>
                    <p className = 'calculatorOtputLine'>{ ( feet ).toFixed(2) } Cubic Feet</p>

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

    valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      padding: '0 6px',
      
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