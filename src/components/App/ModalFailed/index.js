import React from "react";
import ReactDOM from 'react-dom';
import './modalFailed.scss';

function ModalFailed (){
    return (
    <div className="modal-container">
        <svg alt="Alert error image icon" title="Alert error image icon" className="triangle-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M11.148 4.374a.973.973 0 01.334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133a.994.994 0 01-.155 1.192.99.99 0 01-.693.301H3.533a.997.997 0 01-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 002.572-4.507L14.568 3.346a2.995 2.995 0 00-4.123-1.014c-.429.26-.775.615-1.012 1.014zM11 9v4a1 1 0 002 0V9a1 1 0 00-2 0zm2 8a1 1 0 10-2 0 1 1 0 002 0z"/>
        </svg>
        <div className="text-error">
            <h2>Please use a valid email</h2>
            <p>Like: person@inbox.com</p>
        </div>
    </div>
    );
};


export { ModalFailed } ;