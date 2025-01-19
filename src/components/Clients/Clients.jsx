import logo1 from "../../assets/logo-1-color.png";
import logo2 from "../../assets/logo-2-color.png";
import logo3 from "../../assets/logo-3-color.png";
import logo4 from "../../assets/logo-4-color.png";
import logo5 from "../../assets/logo-5-color.png";
import logo6 from "../../assets/logo-6-color.png";

const Clients = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        {[
          logo1,
          logo2,
          logo3,
          logo4,
          logo5,
          logo6,
        ].map((logo, index) => (
          <li className="clients-item" key={index}>
            {/* <a href=""> */}
            <img src={logo} alt="client logo" />
            {/* </a> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
