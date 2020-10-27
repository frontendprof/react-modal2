

import React from 'react';
import "./Modal.css";




export const Modal = ({show,closeHandler}) => {
    return (
        <div className="modal-wrapper"
        style={{opacity:show?"1":"0", 
        transform:show?"translateY(0vh)":"translateY(-80vh)"
    }}
        >
            
            <div className="modal-header">
                <p>Welcome to our site</p>
                <span className="close-modal-btn" onClick={closeHandler}>X</span>
            </div>

            <div className="modal-content">

                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint maiores non culpa ut aspernatur nulla consequuntur ad cumque incidunt!</p>

                </div>

                <div className="modal-footer">
                    <button className="btn-cancel" onClick={closeHandler}>Close</button>
                </div>

            </div>
        </div>
    )
}
