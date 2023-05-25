import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/';
import Sidebar from './components/Sidebar';

import Inicial from './pages/Inicial';
import Pag2 from './pages/Pagina2';
import Pag3 from './pages/Pagina3';
import Pag4 from './pages/Pagina4';
import Pag5 from './pages/Pagina5';
import Pag6 from './pages/Pagina6';





function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            
            <Routes>
                <Route path='/' element={<Inicial/>} />
                <Route path='/pag2' element={<Pag2/>} />          
                <Route path='/pag3' element={<Pag3/>} />          
                <Route path='/pag4' element={<Pag4/>} />          
                <Route path='/pag5' element={<Pag5/>} />          
                <Route path='/pag6' element={<Pag6/>} /> 
            </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesApp;   