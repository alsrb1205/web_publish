import React from 'react';
import TestimonialList from './TestimonialList';

export default function Testimonial({testimonial}) {
    return (
        <section id="testimonial" className="section max-container">
        <h2 className="title">Testimonial</h2>
        <p className="description">See what they say about me</p>
        <TestimonialList testimonial={testimonial}/>
      </section>
      );
}

