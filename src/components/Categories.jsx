import React from 'react';
import { useSelector } from 'react-redux'
const Categories = ({value, onChangeCategoryId}) => {
    const categories = [
        "All",
        "Meat",
        "Vegan",
        "Grill",
        "Spicy",
        "Closed"
    ];

    const text = useSelector((state) => {
        return state.text.string
    })
    
    return (
        <div className="categories">
            {text}
            <ul>
                { categories.map((categoryName, index) => <li 
                    className={value === index ? 'active' : ''}
                    onClick={() => onChangeCategoryId(index)}
                    key={categoryName + "_" + index}
                >{categoryName}</li>)}
            </ul>
        </div>
    )
};

export default Categories;
