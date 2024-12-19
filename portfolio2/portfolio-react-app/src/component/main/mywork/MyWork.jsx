import React from 'react';

export default function MyWork() {
    return (
        <section id="work" class="section max-container">
        <h2 class="title">My work</h2>
        <p class="description">Projects</p>
        <ul class="categories">
          <li><button class="category category--selected">All<span class="category__count">8</span></button></li>
          <li><button class="category">Front-end<span class="category__count">4</span></button></li>
          <li><button class="category">Back-end<span class="category__count">2</span></button></li>
          <li><button class="category">Mobile<span class="category__count">2</span></button></li>
        </ul>
        <ul class="projects">
          <li class="project">
            <img class="project__img" src="images/projects/project1.webp" alt="project1"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #1</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project2.webp" alt="project2"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #2</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project3.webp" alt="project3"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #3</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project4.webp" alt="project4"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #4</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project5.webp" alt="project5"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #5</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project6.webp" alt="project6"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #6</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project7.webp" alt="project7"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #7</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
          <li class="project">
            <img class="project__img" src="images/projects/project8.webp" alt="project8"/>
            <div class="project__metadata">
              <h3 class="project__metadata__title">Project #8</h3>
              <p>Clone Coding with HTML, CSS</p>
            </div>
          </li>
        </ul>
      </section>
      );
}

