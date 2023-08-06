import './category.css';
import icon1 from '../../assets/Frame 298.png';
import icon2 from '../../assets/Frame 299.png';
import icon3 from '../../assets/Frame 230.png';
import icon4 from '../../assets/Frame 231.png';
import icon5 from '../../assets/Frame 232.png';

const Category = () => {
  return (
    <section className="category section">
      <div className="category__container container">
        <div className="category__menu">
          <span className="category__menu-title1">Browse The Category</span>
          <span className="category__menu-title1">
            See All Category{' '}
            <i className="uil uil-angle-right category__menu-icon"></i>
          </span>
        </div>
        <div className="category__card grid">
          <div className="category__card-item ">
            <img src={icon1} alt="" className="category__card-icon" />
            <span className="category__card-title">CSS</span>
          </div>
          <div className="category__card-item">
            <img src={icon2} alt="" className="category__card-icon" />
            <span className="category__card-title">JavaScript</span>
          </div>
          <div className="category__card-item category__card-active">
            <img src={icon3} alt="" className="category__card-icon" />
            <span className="category__card-title">Tailwind</span>
          </div>
          <div className="category__card-item">
            <img src={icon4} alt="" className="category__card-icon" />
            <span className="category__card-title">Vue JS</span>
          </div>
          <div className="category__card-item">
            <img src={icon5} alt="" className="category__card-icon" />
            <span className="category__card-title">React JS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
