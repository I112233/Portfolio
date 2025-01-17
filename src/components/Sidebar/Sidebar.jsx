import { useState } from "react";
import myAvatar from "../../assets/ido-avatar-C_hoHd-2.png";

import "ionicons";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <ion-icon
            name={isExpanded ? "chevron-up" : "chevron-down"}
          ></ion-icon>
        </button>

        <figure className="avatar-box">
          <img src={myAvatar} alt="Ido Roth" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ido Roth">
            Ido Roth
          </h1>
          <p className="title">Full Stack Developer</p>
        </div>
      </div>

      <div className={`sidebar-info_more ${isExpanded ? "visible" : ""}`}>
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <p className="contact-link"><a style={{ color: 'white', textDecoration: 'none' }} href="mailto:idoroth4@gmail.com">idoroth4@gmail.com</a></p>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <p className="contact-link"><a
                href="tel:+972548333107"
                style={{ color: 'white', textDecoration: 'none' }}
              >+972 54-833-3107</a></p>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2002-01-14">January 14, 2002</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Lod, Israel</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/profile.php?id=61565891480362&locale=he_IL"
              className="social-link"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/ido-roth-67341528a/"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/ido111222333/"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
