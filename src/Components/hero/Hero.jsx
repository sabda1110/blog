import Gambar from '../../assets/Group.png';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero__container container grid">
        <div className="hero__about">
          <h2 className="hero__about-title">Hi, i’m Sabda Front end dev</h2>
          <p className="hero__about-subtitle">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, <br /> etc Make sure you subscribe to get the latest
            updates
          </p>
          <div className="hero__about-input">
            <input
              type="text"
              className="hero__input"
              placeholder="Enter Your Email"
            />
            <button className="hero__button">Subscribe</button>
          </div>
        </div>
        <img src={Gambar} alt="gambar hero" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;
