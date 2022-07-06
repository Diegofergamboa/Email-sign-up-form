import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../Modal/index';
import './form.scss';

function Form() {

    const [value, setValue] = React.useState('Put your mail here');
    
    const [showModal, setShowModal] = React.useState(false);
    const portalNode = document.getElementById('portal');

    // Setter of the onClick function.
    function handleButtonInput() {
        checkTextValue();
        setShowModal(!showModal);
    };

    // Check if the mail is in the correct format with an arroba and a point.
    function checkTextValue(){
        const inputValue = value;
        if (!inputValue.includes('@') && !inputValue.includes('.')){
            setValue('Invalid mail');
        } else {
            setValue('Mail correct');
        }
    };

    // The setter of the useState of react.
    function handleChangeInput(event) {
        const inputValue = event.target.value;
        setValue(inputValue);
    };

    return (
        <>
        <form>
            <label htmlFor='inputId' className="label-title">Email Adress</label>
            <div className='form--input-button'>
            <input onChange={handleChangeInput} type='text' id='inputId' value={value} placeholder={'Put your mail here'}className='input-class'name='inputId'></input>
            <button type='button' onClick={handleButtonInput}></button>
            </div>
        </form>
        {showModal && ReactDOM.createPortal(<div><p>Hola que hace</p></div>, portalNode)}
        </>
    );
};

export { Form } ;