import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-info">
        <h1 className="contacts-title">Contacts</h1>
        <div className="contacts-address">
          <p>Address: 123 Nail Street, Tel Aviv, Israel</p>
          <p>Phone: +972 123 4567</p>
          <div className="social-media-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icons-icon social-icon"
                src="/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icons-icon social-icon"
                src="/icons/telegram.svg"
                alt="Telegram"
              />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icons-icon social-icon"
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
              />
            </a>
          </div>
          <img className="salonPhoto" src="../images/salon-photo.jpg" />
        </div>

      </div>
    </div>
  );
}

export default Contacts;
