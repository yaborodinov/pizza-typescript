import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from '../components/PizzaBlock/Skeleton';

import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';

const Home = () => {

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
        <>
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
        </>
    )
}

export default Home;
