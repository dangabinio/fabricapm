import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Pag6() {
    return (
        <div>
            <h6>Pagina6</h6>

            <div className="container">
                <div className="table">
                    <h1>Texto</h1>
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Assunto : Assalto a mão armada</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dois homens <span> armados </span> que <span>assaltavam</span> pedestres da orla da praia de Tambaú fugiram da Polícia Militar pelo mar. O fato parece inusitado, mas aconteceu, na noite desta quarta-feira, 14. Era por volta das 22h quando duas pessoas caminhavam no local e foram abordados por bandidos. Onde uma guarnição da PM que fazia a ronda percebeu a movimentação e se aproximou. Com isso os bandidos fugiram pelas imediações da orla.</td>
                        </tr>
                        </tbody>
                      </table>
                </div>
            </div>
            <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
        </div>
    );
}

export default Pag6;