import React from 'react';
import ReactDOM from 'react-dom';
import { ModalSucess } from '../ModalSucess/index';
import { ModalFailed } from '../ModalFailed/index';
import './form.scss';

function Form() {

    const [value, setValue] = React.useState('Put your mail here');

    const portalNode = document.getElementById('portal');

    
    function handleChangeInput(event) {
        const inputValue = event.target.value;
        setValue(inputValue);
    };
    
    // The setter of the useState in the value of the input.
    const handleChangeButton = () => {
        const inputValue = value;
        if (inputValue.includes('@') && inputValue.includes('.') && inputValue.length > 6) {
            setValue('Mail correct'); } 
        else {
            setValue('Mail incorrect');
            }; 
    };


    return (
        <>
        <form>
            <label htmlFor='inputId' className="label-title">Email Adress</label>
            <div className='form--input-button'>
            <input onChange={handleChangeInput} type='text' id='inputId' value={value} placeholder={'Put your mail here'}className='input-class'name='inputId'></input>
            <button type='button' onClick={handleChangeButton}>
                <svg xmlns="http://www.w3.org/2000/svg" className='rigth-arrow-svg' viewBox="0 0 24 24">
                    <path d="M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"/>
                </svg>
            </button>
            </div>
        </form>
        {(value === 'Mail correct') ? ReactDOM.createPortal(<ModalSucess/>, portalNode): null}
        {(value === 'Mail incorrect') ? ReactDOM.createPortal(<ModalFailed/>, portalNode): null}
        </>
    );
};

export { Form } ;