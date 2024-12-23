import React from 'react';
import Testimonial from './Testimonial';

export default function Testimonials() {
    const testList = [
        {
            "img": "images/testimonials/people1.webp",
            "alt": "people1",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisiodio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name": "James Kim",
            "company": "Google"
        },
        {
            "img": "images/testimonials/people2.webp",
            "alt": "people2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore necessitatibus sequi id obcaecati,assumenda quam corrupti. Numquam blanditiis praesentium, similique autem, accusamus debitis cupiditate,tempora officiis sed inventore nihil incidunt.",
            "name": "Smith Park",
            "company": "Samsung"
        },
        {
            "img": "images/testimonials/people3.webp",
            "alt": "people3",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nulla incidunt autem ullam, commodiin impedit repellat exercitationem provident at recusandae doloremque pariatur temporibus hic blanditiisexplicabo voluptatibus neque aliquam.",
            "name": "Anna Jin",
            "company": "Samsung"
        }
    ]

    return (
        <ul className="testimonials">
            {testList && testList.map((test)=>
            <li className="testimonial">
                <Testimonial img={test.img} alt={test.alt} description={test.description} name={test.name} company={test.company} />
            </li>
            )}
        </ul>
    );
}

