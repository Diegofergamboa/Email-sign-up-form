import React from "react";
import ReactDOM from 'react-dom';
import './modalFailed.scss';

function ModalFailed (){
    return (
    <div className="modal-container">
        <img src="../../../assets/svg-icons/alert-triangle.svg" className="triangle-image"></img>
        <div>
            <h2>Please use a valid email</h2>
            <p>Like: person@inbox.com</p>
        </div>
    </div>
    );
};


export { ModalFailed } ;