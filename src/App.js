import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilmForm from './components/Film/FilmForm';
import Navbar from './components/Navbar/Navbar';
import FilmPage from './Pages/Home/Film';


import Home from './Pages/Home/Home'

function App() {
  return (
    <Fragment>
      <title>Shiver</title>
      <BrowserRouter>
      
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/create'  element= {<FilmForm/>}></Route>
            <Route path='/:id'  element= {<FilmPage></FilmPage>}></Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
