import './feature.css';
import Image from '../../assets/Article_Image.png';
import Image2 from '../../assets/Article_Image2.png';
import Image3 from '../../assets/Article_Image3.png';
import Image4 from '../../assets/Article_Image4.png';
import Profile from '../../assets/Ellipse 80.png';

const Feature = () => {
  return (
    <section className="feature section">
      <div className="feature__container container">
        <div className="feature__menu">
          <span className="feature__menu-title">Featured Article</span>
          <span className="feature__menu-subtitle">
            See All Article
            <i className="uil uil-angle-right feature__menu-icon"></i>
          </span>
        </div>

        <div className="feature__card grid">
          <div className="feature__card-item">
            <img src={Image} alt="" className="feature__card-image" />
            <span className="feature__card-title">
              Fundametal Of JavaScript
            </span>
            <div className="feature__card-desc">
              <img
                src={Profile}
                alt="Profile"
                className="feature__desc-image"
              />
              <div className="feature__desc">
                <span className="feature__desc-username">Dasteen</span>
                <span className="feature__desc-date">Jan 10,2022 .</span>
              </div>
              <span className="feature__card-minete">3 Min Read</span>
            </div>
          </div>
          <div className="feature__card-item">
            <img src={Image2} alt="" className="feature__card-image" />
            <span className="feature__card-title">
              Grid CSS Make Your Life Easier
            </span>
            <div className="feature__card-desc">
              <img
                src={Profile}
                alt="Profile"
                className="feature__desc-image"
              />
              <div className="feature__desc">
                <span className="feature__desc-username">Dasteen</span>
                <span className="feature__desc-date">Jan 10,2022 .</span>
              </div>
              <span className="feature__card-minete">3 Min Read</span>
            </div>
          </div>
          <div className="feature__card-item">
            <img src={Image3} alt="" className="feature__card-image" />
            <span className="feature__card-title">
              Make animated light mode and dark mode toggle with CSS
            </span>
            <div className="feature__card-desc">
              <img
                src={Profile}
                alt="Profile"
                className="feature__desc-image"
              />
              <div className="feature__desc">
                <span className="feature__desc-username">Dasteen</span>
                <span className="feature__desc-date">Jan 10,2022 .</span>
              </div>
              <span className="feature__card-minete">3 Min Read</span>
            </div>
          </div>
          <div className="feature__card-item">
            <img src={Image4} alt="" className="feature__card-image" />
            <span className="feature__card-title">
              Make tic tac toe games with react JS
            </span>
            <div className="feature__card-desc">
              <img
                src={Profile}
                alt="Profile"
                className="feature__desc-image"
              />
              <div className="feature__desc">
                <span className="feature__desc-username">Dasteen</span>
                <span className="feature__desc-date">Jan 10,2022 .</span>
              </div>
              <span className="feature__card-minete">3 Min Read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
