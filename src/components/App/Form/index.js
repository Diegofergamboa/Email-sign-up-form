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
    
    // Running the Modals with the setup of false or true.
    // React.useEffect(()=> {
        
    // }, [showModal])
    


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
        {showModal && ReactDOM.createPortal(<ModalSucess></ModalSucess>, portalNode)}
        {!showModal && ReactDOM.createPortal(<ModalFailed></ModalFailed>, portalNode)}
        </>
    );
};

export { Form } ;