import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Blog2 = () => {
  return (
    <Layouts>
      {/* Section Archive Started */}
      <section className="section kf-archive-started">
        <div className="container">
          <div className="kf-titles">
            <h1
              className="kf-p-title text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              Brazil Ilado
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/iladoLarge.png)" }}
        />
      </section>
      {/* Section Archive */}
      <section className="section kf-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div
                className="post-content element-anim-1 scroll-animate"
                data-animate="active"
              >
                <blockquote>
                  <p>
                    Café de origen brasilero con cuerpo, aterciopelado, dulce
                    con final prolongado. Predomina el aroma frutal y dulce.
                  </p>
                </blockquote>
                <ul>
                  <li>NOMBRE TÉCNICO: Ilado</li>
                  <li>
                    DESCRIPCIÓN: Cuerpo aterciopelado,dulce con final prolongado
                  </li>
                  <li>ORIGEN: Cerrado - Monte Carmelo</li>
                  <li>VARIETAL: Mundo Novo</li>
                  <li>PROCESO: Natural</li>
                  <li>ALTURA: 1050 msnm</li>
                  <li>PUNTUACIÓN: 84 puntos</li>
                  <li>
                    NOTAS DE CATA: Aroma frutal y dulce, con sabor a notas
                    cítricas, nueces y chocolate
                  </li>
                </ul>
                <p>
                  <br />
                </p>
                <h3>Aliquam vel sem vel vellesuada</h3>
                <p>
                  <img src="images/latest_blog1.jpg" alt="image" />
                </p>
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                  dignissim sapien sit amet molestie rutrum. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Pellentesque in porta dolor, a suscipit risus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                  arcu in lorem rhoncus ullamcorper. Ut at nulla ut libero
                  mollis viverra sed vitae purus.
                </p>

                <p>
                  Nam dui mauris, congue vel nisi in, tempus gravida enim. Nulla
                  et tristique orci. Pellentesque lectus sapien, maximus id
                  gravida sit amet, tristique non eros. Etiam aliquet, sem vitae
                  sagittis convallis, ante sapien tincidunt nisl, eget dapibus
                  tortor velit quis ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/6.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
               
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                No es que el café me de insomnio, es que me hace soñar despierto.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Brands */}
      <div className="section kf-brands">
        <div className="container">
          {/* <div className="kf-brands-items row">
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
          </div> */}
        </div>
      </div>
    </Layouts>
  );
};
export default Blog2;
