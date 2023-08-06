import './lastes.css';
import Gambar from '../../assets/Mask Group.png';

const Lastes = () => {
  return (
    <section className="lastes section">
      <div className="lastes__container container">
        <div className="lastes__container-image">
          <img src={Gambar} alt="Gambar_icon" />
        </div>
        <h2 className="lastes__title">Subscribe For the lastest updates</h2>
        <span className="lastes__subtitle">
          Subscribe to newsletter and never miss the new post every week.
        </span>
        <div className="lastes__input">
          <input
            type="text"
            className="lastes__input-input"
            placeholder="Enter Your Email Here..."
          />
          <button className="lastes__input-button">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Lastes;
