import React from 'react';

type CategoriesProps = {
    value: number;
    onChangeCategoryId: any;
}

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategoryId}) => {
    const categories = [
        "All",
        "Meat",
        "Vegan",
        "Grill",
        "Spicy",
        "Closed"
    ];

    return (
        <div className="categories">
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
