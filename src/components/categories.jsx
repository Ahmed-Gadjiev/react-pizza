import React, { useState } from 'react';

function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = useState(null);
    // const [inactiveItem, setInactiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeItem === index ? 'active' : '  '}
                            onClick={() => {onSelectItem(index)}}
                            key={Math.random()}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;