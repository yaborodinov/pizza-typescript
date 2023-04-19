import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './scss/app.scss';
import { decrement, increment, test } from './redux/slices/filterSlice';

export const SearchContext = React.createContext('');

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
<>
        <div>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                Increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                Decrement
                </button>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(test())}
                >
                555
                </button>
            </div>
        </div>
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </SearchContext.Provider>
        </div>
        </>
    );
}

export default App;
