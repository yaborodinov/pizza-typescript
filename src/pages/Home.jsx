import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Skeleton from '../components/PizzaBlock/Skeleton';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Sort, { sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setCategoryId, setPageCount, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

const Home = () => {
    const {searchValue} = React.useContext(SearchContext);
    const pageCount = useSelector(state => state.filter.pageCount)
    const {items, status} = useSelector(state => state.pizza)

    const { categoryId, sortType } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const isSearch = useRef(false);
	const isMounted = useRef('');


    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/> );
    const pizzas = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }

        return false
    }).map(property => <PizzaBlock key={property.id} {...property}/>);

	const getPizzas = () => {
        const category = categoryId > 0 ? `?category=${categoryId}&` : '?';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const title = searchValue ? `&title=${searchValue}` : '';
        
        const apiUrl = new URL('https://63fb84524e024687bf79fb74.mockapi.io/items');
        const sortUrl = apiUrl + `${category}sortBy=${sortBy}&order=${order + title}&page=${pageCount}&limit=${4}`;
        
        dispatch(fetchPizzas({
            sortUrl
        }))
        
        window.scrollTo(0, 0);
	}
	
	useEffect(() => {		
		const incomeUrl = window.location.search
		if (incomeUrl) {
			const params = qs.parse(incomeUrl.substring(1))
			const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
			dispatch(
				setFilters({
					categoryId: params.categoryId,
					pageCount: params.currentPage,
					sortType: sort,
				})
			)
			isSearch.current = true;
		}

	}, [])

    useEffect(() => {
        !isSearch.current && getPizzas();
		isSearch.current = false
    }, [categoryId, sortType, searchValue, pageCount]);

    useEffect(() => {
		if (isMounted.current) {    
			const queryString = qs.stringify({
			  sortProperty: sortType.sortProperty,
			  categoryId,
			  currentPage: pageCount
			}, {addQueryPrefix: true})
	  
            navigate(queryString);
		}

        isMounted.current = true;
        
    }, [categoryId, sortType, pageCount])


    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategoryId={(i) => dispatch(setCategoryId(i))}
                 />
                <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
                {status === 'error' ? (
                    <div className="content__error-info">
                        <h2>Error occurred</h2>
                        <p>Pizzas haven't found. Try again later</p>
                    </div>
                ) : (
                    <div className="content__items">
                        {
                            status === 'loading' ?
                            skeleton :
                            pizzas
                        }
                    </div>
                )}
            <Pagination
				currentPage={pageCount}
				onPageCountChange={(value) => dispatch(setPageCount(value))}
			/>
        </>
    )
}

export default Home;
