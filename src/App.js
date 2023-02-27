import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'https://63fb84524e024687bf79fb74.mockapi.io/items';
        axios.get(apiUrl).then((resp) => {
          setItems(resp.data);
          setIsLoading(false);
        });
      }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">
                        {
                            isLoading ?
                            [... new Array(6)].map((_, i) => <Skeleton key={i}/> ) :
                            items.map(property => <PizzaBlock key={property.id} {...property}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
