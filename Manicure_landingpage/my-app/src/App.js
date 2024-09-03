import React, { useState, useEffect } from "react";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import Gallery from "./components/Gallery";
import PriceList from "./components/PriceList";
import Contacts from "./components/Contacts";
import AboutPage from "./components/AboutPage";
import "./App.css"; // Подключите файл стилей

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li className="mainLogo">
              <ScrollLink to="about-section" smooth={false} duration={400}>
                nail studio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="gallery-section" smooth={false} duration={400}>
                Gallery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="price-section" smooth={false} duration={400}>
                Price List
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contacts-section" smooth={false} duration={300}>
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Element name="about-section" className="section" id="about-section">
          <AboutPage />
        </Element>
        <Element
          name="gallery-section"
          className="section"
          id="gallery-section"
        >
          <Gallery />
        </Element>
        <Element name="price-section" className="section" id="price-section">
          <PriceList />
        </Element>
        <Element
          name="contacts-section"
          className="section"
          id="contacts-section"
        >
          <Contacts />
        </Element>
      </main>
      <footer>
        <p>&copy; 2024 Nail Studio. All Rights Reserved.</p>
        <p>
          Follow us on
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instagram
          </a>
          ,
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Facebook
          </a>
          , and
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Twitter
          </a>
          .
        </p>
      </footer>
      {/* Кнопка для скролла наверх */}
      <button
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollTop}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
