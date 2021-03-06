import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';


function Home({ items }) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетерианские',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}
                />
                
                <SortPopup
                    items={[
                        { name: 'Популярности', type: 'popular' },
                        { name: 'Цене', type: 'cost' },
                        { name: 'Алфавиту', type: 'alphabet' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj) => (
                    <PizzaBlock key={obj.id} name={obj.name} {...obj} />
                ))}
            </div>
        </div>
    );
}

export default Home;
