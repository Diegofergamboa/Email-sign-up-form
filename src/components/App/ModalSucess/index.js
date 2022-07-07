import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import './ModalSucess.scss';

function ModalSucess (){
    return (
    <div className="modal-container">
    <svg alt="Sucess into the login for the user" title="Sucess into the login for the user" className="check-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19.293 5.293L9 15.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l11-11a.999.999 0 10-1.414-1.414z"/>
    </svg>
    <div className="text-sucess">
        <h2>Yay! Thank you</h2>
        <p>We´ve sent a confirmation link to you inbox.</p>
    </div>
    </div>
    );
};


export { ModalSucess } ;