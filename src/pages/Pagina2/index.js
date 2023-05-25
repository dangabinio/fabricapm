import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Pag2() {
    return (
        <>
            <h2>Pagina 2</h2>
            <div className="container">
                <h2>Consutar atos cadastrados</h2>                                         
                <div className="dropdown">
                  <button className="btn btn-secondary btn-default btn-lg dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">teste
                  <span className="caret"></span></button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">armas</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">drogas</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">assaltos</a></li>
                    <li role="presentation" class="divider"></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
                  </ul>
                </div>
                <a className="btn-buscar" href="#">buscar</a>
              </div>
            <Link to='/'>Inicial</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
           <Link to='/pag6'>Pagina6</Link>
        </>
    );
}

export default Pag2;