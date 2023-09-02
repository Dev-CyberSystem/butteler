import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";

const Contacts = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/menu_reservation_inner_bg.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contacto
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Zona Norte Tucumán</h5>
                  <ul>
                    <li>
                      Marcos Paz 336 <br />
                      San Miguel de Tucumán
                    </li>
                  </ul>
                </div>
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Telefono</h5>
                  <ul>
                    <li>
                      +012 (345) 678 99 <br />
                      123456780
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Zona Oeste</h5>
                  <ul>
                    <li>
                      San Martin 4694 <br />
                      San Miguel de Tucumán
                    </li>
                  </ul>
                </div>
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Telefono</h5>
                  <ul>
                    <li>
                      +012 (345) 678 99 <br />
                      123456780
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Zona Sur</h5>
                  <ul>
                    <li>
                      Crisostomo Alvarez <br />
                      San Miguel de Tucumán
                    </li>
                  </ul>
                </div>
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Telefono</h5>
                  <ul>
                    <li>
                      +012 (345) 678 99 <br />
                      123456780
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Contacto</div>
              <h3 className="kf-title">Envianos tu consulta</h3>
            </div>
            <form id="cform" method="post">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Nombre" />
                    <i className="far fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <i className="fas fa-at" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="tel" name="tel" placeholder="Telefono" />
                    <i className="fas fa-mobile-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <input type="text" name="subject" placeholder="Titulo" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea
                      name="message"
                      placeholder="Mensaje"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <a
                      href="#"
                      className="kf-btn"
                      onclick="$('#cform').submit(); return false;"
                    >
                      <span>Enviar Mensaje</span>
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Gracias, su mensaje fue enviado.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      {/* <InstaCarousel /> */}
      {/* Section Brands */}
      {/* <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layouts>
  );
};
export default Contacts;
