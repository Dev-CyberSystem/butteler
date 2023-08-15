const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/sinfondo.png" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              {/* <h5>Working Hours</h5>
              <ul>
                <li>
                  Sunday - Thursday
                  <em>08:00 am - 09:00pm</em>
                </li>
                <li>
                  Only Friday
                  <em>03:00 pm - 09:00pm</em>
                </li>
                <li>
                  <strong>Saturday Close</strong>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contacto</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Direccion :</em>
                  Marcos Paz 336, San Miguel de Tucumán
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email:</em>
                  butteler.cafe@gmail.com
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Telefono</em>
                  3814173527
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            {/* <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="images/grid_gal1.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal6.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2023 DevSystem. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
