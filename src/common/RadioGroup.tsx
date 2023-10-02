import { useState } from 'react';
import './RadioGroup.css';

interface RadioGroupProps {
    inputName: string;
    values: string[];
    onchange: (value: string)=>void;
}

const RadioGroup = ({
    inputName,
    values,
    onchange,
}: RadioGroupProps) => {
    const [checked, setChecked] = useState(values[0]);
    const id = inputName + "-radio-group";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setChecked(value);
        onchange(value);
    }

    return (
        <div className='radio-group-container'>
            <label className="radio-group__label" htmlFor={id}>{inputName}</label>
            <div id={id} className="radio-group radio-group--responsive">
                {values.map((value, i) => 
                    <>
                    <input 
                        key={"input-" + i} 
                        className="radio__input" 
                        type="radio" 
                        id={value} 
                        name={inputName}
                        value={value}
                        checked={value === checked}
                        onChange={handleChange}
                    />
                    <label 
                        key={"label-" + i} 
                        className="radio__label radio__label--responsive" 
                        htmlFor={value}
                    >
                        {value}
                    </label>
                    </>
                )}
            </div>
        </div>
    )
  }

export default RadioGroup