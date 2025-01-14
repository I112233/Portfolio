/* eslint-disable react/prop-types */

import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";
import avatar4 from "../../assets/images/avatar-4.png";

const Testimonials = ({ showModal }) => {
  const testimonialsData = [
    {
      name: "Daniel Lewis",
      avatar: avatar1,
      text: "Ido developed a memory card game for my daughter. She likes it very much! And the fireworks, too!",
    },
    {
      name: "Jessica miller",
      avatar: avatar2,
      text: "Ido built a task management tool for me. I find it really helpful and I don't know how I got along before.",
    },
    {
      name: "Emily evans",
      avatar: avatar3,
      text: "Ido created a trivia quiz for me and my family. We play with it every weekend and we really have fun!",
    },
    {
      name: "Henry william",
      avatar: avatar4,
      text: "I didn't know where to go until I discovered Ido's place picker - I plan every travel with it.",
    },
  ];

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          <li
            className="testimonials-item"
            key={index}
            onClick={() => showModal(testimonial)}
          >
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {testimonial.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
