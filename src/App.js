import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzasObj from './assets/pizzas.json';
import './scss/app.scss';

function App() {
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
                        {pizzasObj.map(property => <PizzaBlock 
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
