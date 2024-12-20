import React from 'react';

export default function Categories({ categories, selectedCategory, setSelectedCategory }) {
    const handleCategory = (name) => {
        setSelectedCategory(name);
    }
    return (
        <ul class="categories">
            {categories && categories.map((cat) =>
                <li>
                    <button className={`category ${selectedCategory === cat.name ? "category--selected" : ""}`} onClick={() => handleCategory(cat.name)}>{cat.name}<span class="category__count">{cat.count}</span></button>
                </li>
            )}
        </ul>
    );
}

