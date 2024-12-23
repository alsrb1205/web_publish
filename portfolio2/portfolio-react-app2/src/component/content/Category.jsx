import React from 'react';

export default function Category({ name, count, setSelectedCategory, selectedCategory }) {
    const handleCategory = () => {
        setSelectedCategory(name);
    }
    return (
        <>
            <button className={`category ${selectedCategory === name ? "category--selected" : ""}`}  onClick={handleCategory}>{name}<span className="category__count">{count}</span></button>
        </>
    );
}

