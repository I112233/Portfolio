const Clients = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {[
          "logo-1-color.png",
          "logo-2-color.png",
          "logo-3-color.png",
          "logo-4-color.png",
          "logo-5-color.png",
          "logo-6-color.png",
        ].map((logo, index) => (
          <li className="clients-item" key={index}>
            <a href="#">
              <img src={`/React-Portfolio-2/src/assets/images/${logo}`} alt="client logo" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
