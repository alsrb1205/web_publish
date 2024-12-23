import React from 'react';
import Project from './Project';

export default function Projects() {
    const projectlist=[
        {
            "img": "images/projects/project1.webp",
            "alt":"project1",
            "title": "Project #1",
            "description": "Clone Coding with HTML, CSS",
            "category": "Front-end"
        },
        {
            "img": "images/projects/project2.webp",
            "alt":"project2",
            "title": "Project #2",
            "description": "Clone Coding with HTML, CSS",
            "category": "Front-end"
        },
        {
            "img": "images/projects/project3.webp",
            "alt":"project3",
            "title": "Project #3",
            "description": "Clone Coding with HTML, CSS",
            "category": "Front-end"
        },
        {
            "img": "images/projects/project4.webp",
            "alt":"project4",
            "title": "Project #4",
            "description": "Clone Coding with HTML, CSS",
            "category": "Front-end"
        },
        {
            "img": "images/projects/project5.webp",
            "alt":"project5",
            "title": "Project #5",
            "description": "Clone Coding with HTML, CSS",
            "category": "Back-end"
        },
        {
            "img": "images/projects/project6.webp",
            "alt":"project6",
            "title": "Project #6",
            "description": "Clone Coding with HTML, CSS",
            "category": "Back-end"
        },
        {
            "img": "images/projects/project7.webp",
            "alt":"project7",
            "title": "Project #7",
            "description": "Clone Coding with HTML, CSS",
            "category": "Mobile"
        },
        {
            "img": "images/projects/project8.webp",
            "alt":"project8",
            "title": "Project #8",
            "description": "Clone Coding with HTML, CSS",
            "category": "Mobile"
        }
    ]
    return (
        <ul className="projects">
            {projectlist && projectlist.map((project)=>
        <li className="project">
            <Project img={project.img}
                     alt={project.alt}
                     title={project.title}
                     description={project.description}
            />
        </li>
            )}
      </ul>
    );
}

