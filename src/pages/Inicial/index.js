import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Inicial() {
    return (
        <>
           <h1>Pagina inicial</h1>
           <section className="tela">
                <div className="cadastrar">
                    <label for="">Cadastrar a categoria do ato</label>
                    <input type="text" placeholder="Ex: Atentado em escolas"/>

                    <div className="nivel">
                        <label for="">Nivel de periculosidade</label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="baixo">baixo</option>
                            <option value="medio">medio</option>
                            <option value="alto">alto</option>
                        </select>
                    </div>

                    <a className="btn" href="">cadastar</a>
                </div>


            </section>
           <Link to='/pag2'>Pagina2</Link>
           <Link to='/pag3'>Pagina3</Link>
           <Link to='/pag4'>Pagina4</Link>
           <Link to='/pag5'>Pagina5</Link>
           <Link to='/pag6'>Pagina6</Link>
          
        </>
    );
}

export default Inicial;