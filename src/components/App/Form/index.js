import React from 'react';

function Form() {
    return(
        <form>
            <label>
                EMAIL ADDRESS
                <input></input>
            </label>
            <button onSubmit={() => alert('Se ha submitido')}>
                <span>Flechita</span>
            </button>
        </form>
    );
};

export { Form } ;