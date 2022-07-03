import React from 'react';
import './form.scss';

function Form() {
    return(
        <form>
            <label for='inputId' className="label-title">Email Adress</label>
            <input type='text' id='inputId' name='inputId'></input>
            <button onClick={() => alert('Se ha submitido')}></button>
        </form>
    );
};

export { Form } ;