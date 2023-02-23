import React from 'react';

const Categories = () => {

    const [activeElement, setActiveElement] = React.useState(0);

    const categories = [
        "All",
        "Meat",
        "Vegan",
        "Grill",
        "Spicy",
        "Closed"
    ];

    const setActive = (index) => {
        setActiveElement(index);
    }
    
    return (
        <div className="categories">
            <ul>
                { categories.map((value, index) => <li 
                    className={activeElement === index ? 'active' : ''}
                    onClick={() => setActive(index)}
                    key={value + "_" + index}
                >{value}</li>)}
            </ul>
        </div>
    )
};

export default Categories;
