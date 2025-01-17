import webDesign from "../../assets/icon-design.svg";
import webDev from "../../assets/icon-dev.svg";

const Service = () => {
  return (
    <section className="service">
      <h3 style={{ marginTop: "30px" }} className="h3 service-title">Skills</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img src={webDesign} alt="אייקון עיצוב" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web Development</h4>
            <p className="service-item-text">
              Website development with HTML, CSS, JS, TS, React.js and Node.js.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img src={webDev} alt="אייקון פיתוח אתרים" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Interpersonal Communication</h4>
            <p className="service-item-text">
              High level of emotional intelligence and articulateness. Fluency in English.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Service;
