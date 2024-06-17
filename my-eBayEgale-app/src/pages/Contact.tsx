import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export const Contact: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h2 style={styles.header}>LET'S TALK</h2>
        <h1 style={styles.title}>Speak With Expert</h1>
        <p style={styles.description}>
          From its medieval origins to the digital era, learn everything there
          is to know about the ubiquitous lorem ipsum passage.
        </p>
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            <p>Email: abcdef@convextech.com</p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} />
            <p>Call Us: +1 (770) 597-2223</p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
            <p>Office Address: USA: 10240 Kemah Place McKinney 75071 TX, USA</p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faClock} style={styles.icon} />
            <p>
              OFFICE TIMING: 9:00 AM to 06:00 PM (Mon-Fri) <br />
              9:00 AM to 01:00 PM (Saturday)
            </p>
          </div>
        </div>
      </div>
      <div style={styles.rightSection}>
        <form style={styles.form}>
          <input type="text" placeholder="abcdef" style={styles.input} />
          <input
            type="email"
            placeholder="abcdef@gmail.com"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="+1 (770) 597-2223"
            style={styles.input}
          />
          <textarea
            placeholder="Your Message here"
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.submitButton}>
            SUBMIT NOW
          </button>
          <div style={styles.recaptcha}>
            <div>
              <input
                type="checkbox"
                id="notRobot"
                style={{ marginInline: "10px" }}
              />
              <label htmlFor="notRobot">I'm not a robot</label>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/800px-RecaptchaLogo.svg.png"
              alt="reCAPTCHA"
              style={styles.recaptchaImage}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "space-around",
    padding: "60px",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#f7f7f5",
  },
  leftSection: {
    paddingRight: "20px",
    width: "30%",
  },
  header: {
    color: "#007bff",
    fontSize: "16px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  description: {
    marginBottom: "50px",
    fontWeight: 500,
  },
  contactInfo: {
    marginTop: "20px",
  },
  contactItem: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
  },
  icon: {
    marginRight: "10px",
    marginBottom: "15px",
  },
  rightSection: {
    paddingLeft: "20px",
    width: "30%",
    backgroundColor: "white",
    padding: "60px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    marginBottom: "25px",
    padding: "10px",
    fontSize: "1em",
    border: "0.5px solid grey",
    borderRadius: "4px",
  },
  textarea: {
    marginBottom: "25px",
    padding: "10px",
    fontSize: "1em",
    height: "100px",
    border: "0.5px solid grey",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "10px",
    fontSize: "1em",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginBottom: "25px",
  },
  recaptcha: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "35%",
    marginTop: "10px",
    padding: "10px",
    border: "1px solid grey",
    fontSize: "18px",
    backgroundColor: "#f7f7f5",
    borderRadius: "4px",
  },
  recaptchaImage: {
    marginLeft: "10px",
    width: "80px",
  },
};
