import React from 'react';

export default function ProjectList({ projectList, selectedCategory }) {
    const filterProjects =
        selectedCategory === "All"
            ? projectList
            : projectList.filter((project) => project.category === selectedCategory);
    return (
        <ul className="projects">
            {filterProjects && filterProjects.map(pj =>
                <li className="project">
                    <img className="project__img" src={pj.img} alt="project1" />
                    <div className="project__metadata">
                        <h3 className="project__metadata__title">{pj.title}</h3>
                        <p>{pj.desc}</p>
                    </div>
                </li>
            )}
        </ul>
    );
}

