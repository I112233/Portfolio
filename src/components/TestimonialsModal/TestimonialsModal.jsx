/* eslint-disable react/prop-types */
const TestimonialsModal = ({ data, closeModal }) => {
  if (!data) return null;

  return (
    <div
      className={`modal-container ${data ? "active" : ""}`}
      data-modal-container
    >
      <div
        className={`overlay ${data ? "active" : ""}`}
        data-overlay
        onClick={closeModal}
      ></div>

      <section className="testimonials-modal">
        <button
          className="modal-close-btn"
          data-modal-close-btn
          onClick={closeModal}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={data.avatar} alt={data.name} width="80" data-modal-img />
          </figure>
          {/* <img src="images/icon-quote.svg" alt="quote icon" /> */}
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {data.name}
          </h4>

          <time dateTime={data.date}>{data.formattedDate}</time>

          <div data-modal-text>
            <p>{data.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsModal;
