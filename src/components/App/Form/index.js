import React from 'react';
import './form.scss';

function Form() {
    return(
        <form>
            <label for='inputId' className="label-title">Email Adress</label>
            <div className='form--input-button'>
            <input type='text' id='inputId' class='input-class'name='inputId'></input>
            <button onClick={() => alert('Se ha submitido')}></button>
            </div>
        </form>
    );
};

export { Form } ;