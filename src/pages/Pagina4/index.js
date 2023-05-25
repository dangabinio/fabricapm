import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Pag4() {
    return (
        <div>
            <h4>Pagina 4</h4>
            <div className="container">
                <div className="consultar">
                    <label for="">Consultar palavras</label>
                    <input type="text" placeholder="Ex: armas"/>
                    <a className="btn-buscar" href="">buscar</a>
                    <div className="consultar">
                        <label for="">Consultar palavras cadastradas</label>
                        <input type="text" placeholder="Ex: armas"/>
                        <a className="btn-buscar" href="">buscar</a>
                    </div>
                </div>
                </div>
                <div className="table">
                    <h1>Registro de Palavras</h1>
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">palavras</th>
                            <th scope="col">ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">-</th>
                            <td>assalto</td>
                            <td><button className="btn-editar">editar</button><button className="btn-excluir">exluir</button></td>
                          </tr>
                          <tr>
                            <th scope="row">-</th>
                            <td>assalto</td>
                            <td><button className="btn-editar">editar</button><button className="btn-excluir">exluir</button></td>
                          </tr>
                          <tr>
                            <th scope="row">-</th>
                            <td>assalto</td>
                                    <td><button className="btn-editar">editar</button><button className="btn-excluir">exluir</button></td>
                          </tr>
                        </tbody>
                      </table>
                
            </div>
            <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag5'>Pagina5</Link>
           <Link to='/pag6'>Pagina6</Link>
        </div>
    );
}

export default Pag4;