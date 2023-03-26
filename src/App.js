import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './scss/app.scss';

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} onSearchValueChange={(value) => setSearchValue(value)}/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home searchValue={searchValue}/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
