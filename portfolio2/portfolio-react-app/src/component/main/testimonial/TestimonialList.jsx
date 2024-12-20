import React from 'react';

export default function TestimonialList({testimonial}) {
  return (
    <ul className="testimonials">
      {testimonial && testimonial.map((people) => 
        <li className="testimonial">
          <img className="testimonial__img" src={people.img} alt="people1" />
          <div className="testimonial__bubble">
            <p>{people.text}</p>
            <p><a href="#" className="testimonial__bubble__name">{people.tname}</a> / {people.comp}</p>
          </div>
        </li>
      )}
    </ul>
  );
}

