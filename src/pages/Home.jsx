import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from '../components/PizzaBlock/Skeleton';

import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

const Home = ({searchValue}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'Popularity',
        sortProperty: 'rating'
    });
    const [pageCount, setPageCount] = React.useState(1);

    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/> );
    const pizzas = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }

        return false
    }).map(property => <PizzaBlock key={property.id} {...property}/>);
    
    useEffect(() => {
        setIsLoading(true);
        const category = categoryId > 0 ? `?category=${categoryId}&` : '?';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const title = searchValue ? `&title=${searchValue}` : '';
        
        const apiUrl = new URL('https://63fb84524e024687bf79fb74.mockapi.io/items');
        const sortUrl = apiUrl + `${category}sortBy=${sortBy}&order=${order + title}&page=${pageCount}&limit=${4}`;
        axios.get(sortUrl).then((resp) => {
            setItems(resp.data);
            setIsLoading(false);
        });
        
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, pageCount]);

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategoryId={(i) => setCategoryId(i)}
                 />
                <Sort 
                    value={sortType}
                    onChangeSortType={(obj) => setSortType(obj)}
                />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    isLoading ?
                    skeleton :
                    pizzas
                }
            </div>
            <Pagination onPageCountChange={setPageCount}/>
        </>
    )
}

export default Home;
