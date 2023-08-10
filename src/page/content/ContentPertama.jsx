import Gambar from '../../assets/Article_Image.png';

const ContentPertama = () => {
  return (
    <section className="artikel section">
      <div className="artikel__container container">
        <h2 className="artikel__title">fundametla Of Javascript</h2>
        <img src={Gambar} alt="Gambar Content" className="artikel__img" />
        <p className="artikel__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptas, esse consequuntur molestiae amet explicabo possimus quo
          nulla inventore ea vero neque nisi, velit laborum deleniti non
          perferendis odit libero!
        </p>
        <div className="artikel__content grid">
          <div className="artikel__content-tags">
            <div className="artikel__tags-item">
              <span>JavaScript</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item">
              <span>HTML</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item">
              <span>CSS</span>
              <i className="uil uil-arrow-right"></i>
            </div>
            <div className="artikel__tags-item tags__icon">
              <i className="uil uil-instagram tags__icon"></i>
              <i className="uil uil-facebook tags__icon"></i>
              <i className="uil uil-github tags__icon"></i>
              <i className="uil uil-twitter-alt tags__icon"></i>
            </div>
          </div>
          <div className="artikel__content-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              porro reiciendis explicabo. Commodi quas, reiciendis eligendi sint
              illum culpa aperiam enim provident modi, repellat voluptatum nam
              quos laudantium tempora sunt eveniet distinctio repudiandae atque
              expedita illo neque nulla. Dolorum, blanditiis?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              voluptates dolorum harum reiciendis vero dolore mollitia eius
              ducimus, dolores soluta a nemo est non? Blanditiis illo ipsa
              numquam facere cumque eligendi. Optio quasi minus aliquam aperiam!
              Beatae veritatis et enim adipisci, totam distinctio! Non aperiam
              id laudantium dicta voluptatem nulla?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              nesciunt in molestias nemo, eius suscipit repudiandae dolore
              tempore ab ut ullam distinctio hic eveniet dignissimos sed ad
              voluptates expedita consequatur blanditiis quam magni pariatur
              iure? Facere quis atque accusantium dignissimos tenetur aliquid
              eaque doloribus. Velit ullam praesentium eius voluptate atque
              fugit ad optio quam mollitia nihil beatae deleniti soluta, animi,
              obcaecati asperiores illo harum. Dicta quis vero alias optio autem
              consequuntur voluptate veniam sed nihil itaque ut ea praesentium
              accusantium, cumque omnis et. Molestiae quam architecto aliquid
              nam sed inventore tenetur magnam esse debitis nihil at, ipsum,
              consequuntur ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPertama;
