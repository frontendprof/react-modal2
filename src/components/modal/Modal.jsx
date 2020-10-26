

import React from 'react';
import "./Modal.css";




export const Modal = () => {
    return (
        <div className="modal-wrapper">
            
            <div className="modal-header">
                <p>Welcome to our site</p>
                <span className="close-modal-btn">X</span>
            </div>

            <div className="modal-content">

                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint maiores non culpa ut aspernatur nulla consequuntur ad cumque incidunt!</p>

                </div>

                <div className="modal-footer">
                    <button className="btn-cancel">Close</button>
                </div>

            </div>
        </div>
    )
}
