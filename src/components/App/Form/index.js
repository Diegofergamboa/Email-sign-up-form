import React from 'react';
import './form.scss';

function Form() {

    const [value, setValue] = React.useState('Put your mail here');
    

    function handleInput(event) {
        const inputValue = event.target.value;
        (!inputValue.includes('@') && !inputValue.includes('.')) ? setValue('Invalid mail') : setValue(inputValue);
    };

    function handleChangeInput(event){
        const inputValue = event.target.value;
        setValue(inputValue);
    }
    return(
        <form>
            <label htmlFor='inputId' className="label-title">Email Adress</label>
            <div className='form--input-button'>
            <input onChange={handleChangeInput} type='text' id='inputId' value={value} placeholder={'Put your mail here'}className='input-class'name='inputId'></input>
            <button type='button' onClick={handleInput}></button>
            </div>
        </form>
    );
};

export { Form } ;