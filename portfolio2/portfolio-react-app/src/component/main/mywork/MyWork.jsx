import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './categories/Categories';
import ProjectList from './projects/ProjectList';

export default function MyWork() {
  const [categories, setCategories] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(data => data.json())
      .then(jsonData => {
        const projectCounts = jsonData.categories.map((category) => {
          const count = category.name === 'All'
            ? jsonData.projectlist.length
            : jsonData.projectlist.filter(
              (project) => project.category === category.name).length;
          return { ...category, count };
        });
        setCategories(projectCounts);
        setProjectList(jsonData.projectlist);
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <section id="work" class="section max-container">
      <h2 class="title">My work</h2>
      <p class="description">Projects</p>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />
      <ProjectList
        projectList={projectList}
        selectedCategory={selectedCategory} />
    </section>
  );
}

