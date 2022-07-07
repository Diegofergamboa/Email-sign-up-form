import React from 'react';
import ReactDOM from 'react-dom';
import { ModalSucess } from '../ModalSucess/index';
import { ModalFailed } from '../ModalFailed/index';
import './form.scss';

function Form() {

    const [value, setValue] = React.useState('Put your mail here');
    
    const [showModal, setShowModal] = React.useState(false);
    const portalNode = document.getElementById('portal');

    // Setter of the onClick function.
    function handleButtonInput() {
    // Check if the mail is in the correct format with an arroba and a point.
        const inputValue = value;
        if (!inputValue.includes('@') && !inputValue.includes('.')){
            setValue('Invalid mail');
            setShowModal(false);
        } else {
            setValue('Mail correct');
            setShowModal(true);
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
            <button type='button' onClick={handleButtonInput}>
                <svg xmlns="http://www.w3.org/2000/svg" className='rigth-arrow-svg' viewBox="0 0 24 24">
                    <path d="M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"/>
                </svg>
            </button>
            </div>
        </form>
        {showModal && ReactDOM.createPortal(<ModalSucess/>, portalNode)}
        {!showModal && ReactDOM.createPortal(<ModalFailed/>, portalNode)}
        </>
    );
};

export { Form } ;