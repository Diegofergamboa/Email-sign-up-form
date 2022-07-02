import React from 'react';
import './form.scss';

function Form() {
    return(
        <form>
            <label for='inputId'>
                EMAIL ADDRESS
                <input type='text' id='inputId' name='inputId'></input>
            </label>v
            <button onSubmit={() => alert('Se ha submitido')}>
                <span>Flechita</span>
            </button>
        </form>
    );
};

export { Form } ;