import React, { useState } from 'react';
import Category from './Category';

export default function Categories() {
    const [selectedCategory,setSelectedCategory] =useState('All');
    const categoryList =  [
        {
            "name": "All",
            "count":8
        },
        {
            "name": "Front-end",
            "count":4
        },
        {
            "name": "Back-end",
            "count":2     
        },
        {
            "name": "Mobile",
            "count":2
        }
    ]
  
    return (
        <ul className="categories">
            {categoryList && categoryList.map((category)=>
            <li><Category name={category.name} 
                          count={category.count} 
                          selectedCategory={selectedCategory} 
                          setSelectedCategory={setSelectedCategory} 
                          /></li>
            )}
      </ul>
    );
}

