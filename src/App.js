import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://63fb84524e024687bf79fb74.mockapi.io/items';
        axios.get(apiUrl).then((resp) => {
          setItems(resp.data);
        });
      }, [setItems]);

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
                        {items.map(property => <PizzaBlock 
                            key={property.id} 
                            {...property}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
