// src/Offices.tsx
import React from "react";
import "./Offices.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Office {
  city: string;
  address: string;
  image: string;
}

const offices: Office[] = [
  {
    city: "HEAD OFFICE (LHR)",
    address: "Office# 501, Al-Hafeez Heights Gulberg, Lahore, Pakistan",
    image:
      "https://images.pexels.com/photos/20606133/pexels-photo-20606133/free-photo-of-view-of-a-illuminated-landmark-81-skyscraper-in-ho-chi-minh-city-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    city: "Karachi",
    address:
      "CONNEKT, 4TH FLOOR, RJ MALL, Main Rashid Minhas road Adjacent to Millenium Mall, opposite to Askari 4, Karachi",
    image:
      "https://images.pexels.com/photos/1570404/pexels-photo-1570404.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    city: "ISLAMABAD",
    address: "Office #28, 3rd floor Al Hameed mall G-11 markaz",
    image:
      "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const Offices: React.FC = () => {
  return (
    <div className="offices-container">
      <h2 className="offices-header">OUR OFFICES</h2>
      <div className="offices-cards">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            {/* <div className="office-image"></div> */}
            <div
              className="office-details"
              style={{
                backgroundImage: `url(${office.image}) `,
                backgroundPosition: "center",
              }}
            >
              <div className="office-inner-div">
                <h3 className="office-city">{office.city}</h3>
                <p className="office-address">{office.address}</p>
                {/* <button className="view-map-button">
                <i className="fas fa-map-marker-alt"></i> VIEW ON MAP
              </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
