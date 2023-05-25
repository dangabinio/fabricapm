import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Pag5() {
    return (
        <div>
            <div className="container">
                <div className="table">
                    <h1>Textos cadastrados</h1>
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">data</th>
                            <th scope="col">textos</th>
                            <th scope="col">palavras-chaves</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>16/05/2023</td>
                            <td> <a href="./pagina6.html"> Assalto a mão armada na orla do cabo branco, onde duas pessoas que andanvam de bicicleta, tiveram seus pertencies roubados</a></td>
                            <td>Assalto - armada</td>
                        </tr>
                          <tr>
                            <td>16/05/2023</td>
                            <td>Assalto a mão armada na orla do cabo branco, onde duas pessoas que andanvam de bicicleta, tiveram seus pertencies roubados</td>
                            <td>Assalto - armada</td>
                        </tr>
                          <tr>
                            <td>16/05/2023</td>
                            <td>Assalto a mão armada na orla do cabo branco, onde duas pessoas que andanvam de bicicleta, tiveram seus pertencies roubados</td>
                            <td>Assalto - armada</td>
                        </tr>
                        </tbody>
                      </table>
                </div>
            </div>
            <h5>Pagina 5</h5>
            <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag6'>Pagina6</Link>
        </div>
    );
}

export default Pag5;