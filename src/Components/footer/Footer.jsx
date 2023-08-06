import './footer.css';

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer__container container grid">
        <div className="footer__sosmed">
          <h2 className="footer__sosmed-title">
            Whatsab <span>.blog</span>
          </h2>
          <span className="footer__sosmed-subtitle">
            Digitaldastin by Dastin Darmawan
          </span>
          <div className="footer__sosmed-item">
            <i className="uil uil-twitter-alt footer__item-icon"></i>
            <i className="uil uil-instagram footer__item-icon"></i>
            <i className="uil uil-facebook footer__item-icon"></i>
            <i className="uil uil-linkedin-alt footer__item-icon"></i>
          </div>
        </div>
        <div className="footer__link">
          <div className="footer__link-item">
            <h3 className="footer__link-title">Category</h3>
            <ul className="link__item">
              <li>CSS</li>
              <li>Javascript</li>
              <li>Tailwind</li>
              <li>React js</li>
              <li>More category</li>
            </ul>
          </div>

          <div className="footer__link-item">
            <h3 className="footer__link-title">About Me</h3>
            <ul className="link__item">
              <li>About me</li>
              <li>Project</li>
              <li>Achievement</li>
            </ul>
          </div>

          <div className="footer__link-item">
            <h3 className="footer__link-title">GET IN TOUCH</h3>
            <ul className="link__item">
              <li>+62-821-7297-6852</li>
              <li>sabdasetiawan206@gmail.com</li>
            </ul>
          </div>

          <div className="footer__link-item">
            <h3 className="footer__link-title">FOLLOW US</h3>
            <ul className="link__item">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Link in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright container">
        <span>© 2022 Whatsab</span>
        <span>Made With ❤️ Pekanbaru, Indonesia</span>
      </div>
    </section>
  );
};

export default Footer;
