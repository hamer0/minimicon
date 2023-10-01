import { useState } from 'react';
import './RadioGroup.css';

interface RadioGroupProps {
    inputName: string;
    values: string[];
}

const RadioGroup = ({
    inputName,
    values,
}: RadioGroupProps) => {
    const [checked, setChecked] = useState(values[0]);
    const id = inputName + "-radio-group";

    return (
        <div className='radio-group-container'>
            <label className="radio-group__label" htmlFor={id}>{inputName}</label>
            <div id={id} className="radio-group">
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
                        onChange={(e) => setChecked(e.target.value)}
                    />
                    <label 
                        key={"label-" + i} 
                        className="radio__label" 
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