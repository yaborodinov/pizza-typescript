import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSortType } from '../redux/slices/filterSlice';

export const sortList = [
    {name: 'Popularity (DESK)', sortProperty: 'rating'}, 
    {name: 'Popularity (ASK)', sortProperty: '-rating'}, 
    {name: 'Price (DESK)', sortProperty: 'price'},
    {name: 'Price (ASK)', sortProperty: '-price'},
    {name: 'Alphabet (DESC)', sortProperty: 'title'},
    {name: 'Alphabet (ASK)', sortProperty: '-title'}
];

const Sort = () => {
    const [hideSort, setHideSort] = useState(true);

    const sortRef = useRef()
    const sort = useSelector(selectSort);
    const dispatch = useDispatch();

    useEffect(() => {

        const handleClickOutside = (e) => {
            if(!e.composedPath().includes(sortRef.current)){ 
                setHideSort(true);
            }
        }

        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

   
    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                />
                </svg>
                <b>Sort by:</b>
                <span onClick={() => setHideSort(!hideSort)}>
                    {sort.name}
                </span>
            </div>
            <div className={classNames('sort__popup', { 'hide': hideSort })}>
                <ul>
                    {sortList.map((obj, i) => <li 
                        key={obj.name + '_' + i}
                        className={classNames({'active': sort.sortProperty === obj.sortProperty})}
                        onClick={() => {
                            dispatch(setSortType(obj));
                            setHideSort(!hideSort);
                        }}>
                            {obj.name}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Sort;
