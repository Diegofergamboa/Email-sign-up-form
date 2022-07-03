import React from 'react';
import './form.scss';

function Form() {
    return(
        <form>
            <label for='inputId' className="h2--purple">
                Email Adress
                <input type='text' id='inputId' name='inputId'></input>
            </label>
            <button onClick={() => alert('Se ha submitido')}>
                <span>Flechita</span>
            </button>
        </form>
    );
};

export { Form } ;