import React from 'react';
import './style.css';

function Sidebar() {
    return (
        <section className="user-left">
            <div className="template">
                <img src="images/png.png" alt="foto da pessoa" />
                <p>PMPB</p>

            </div>
            <div className="sistema">
                <img src="images/png.png" alt="foto do usuário" />
                <p>Sistema:</p>
                <span>Usuario</span>

            </div>
        </section>


    );
}

export default Sidebar;