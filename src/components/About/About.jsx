import { useState } from "react";

import Clients from "../Clients/Clients";
import Service from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TestimonialsModal from "../TestimonialsModal/TestimonialsModal";

const About = () => {
  const [modalData, setModalData] = useState(null);

  const showModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About</h2>
      </header>
      <section style={{
        fontSize: "16px"
      }} className="about-text">
        <p>
          I am a Full Stack developer from Lod, Israel.
        </p>
        <br />
        <p>
          My job is to build your website so that it is functional,
          user-friendly and attractive at the same time. <br /><br /> Furthermore, I add
          personal touch to your website and make sure that it is
          eye-catching and easy to use.  <br /><br /> My aim is to bring across your
          message and identity in the most creative way.
        </p>
        <Service />
        <Testimonials showModal={showModal} />
        <TestimonialsModal data={modalData} closeModal={closeModal} />
        <Clients />
      </section>
    </article>
  );
};

export default About;
