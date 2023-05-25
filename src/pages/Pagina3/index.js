import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

function Pag3() {
    return (
        <div>
            <h3>Pagina 3</h3>
            <div className="container">
                <div className="consultar">
                    <label for="">Consultar atos cadastrados</label>
                    <input type="text" placeholder="Ex: atentado"/>
                    <a className="btn-buscar" href="">buscar</a>
                </div>
            </div>
            <div className="table">
              <h1>Registro de Atos</h1>
              <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Atos</th>
                      <th scope="col">ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">-</th>
                      <td>assalto</td>
                      <td><button className="btn-editar">editar</button><button class="btn-excluir">exluir</button></td>
                    </tr>
                    <tr>
                      <th scope="row">-</th>
                      <td>assalto</td>
                      <td><button className="btn-editar">editar</button><button class="btn-excluir">exluir</button></td>
                    </tr>
                    <tr>
                      <th scope="row">-</th>
                      <td>assalto</td>
                              <td><button className="btn-editar">editar</button><button class="btn-excluir">exluir</button></td>
                    </tr>
                  </tbody>
                </table>

          </div>
            <Link to='/'>Inicial</Link>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
           <Link to='/pag6'>Pagina6</Link>
        </div>
    );
}

export default Pag3;