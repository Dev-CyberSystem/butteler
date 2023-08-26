import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const BlogSingle = () => {
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
              BLEND GOAT -Espíritu Santo y Minas Gerais
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/blendGoatLarge.png)" }}
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
                    Café blend de especialidad de origen brasilero. Nuestro
                    Blend de la Cabra fue creado para todos aquellos amantes del
                    café Intenso. Utilizando 80% de granos Arábica y 20% de
                    granos Robusta, logramos un Café de gran Cuerpo, Buena
                    cremosidad, y baja Acidez, aumentando también el porcentaje
                    de Cafeína.
                  </p>
                </blockquote>
                <ul>
                  PUNTUACIÓN: 84 SCA
                  <li>NOMBRE TÉCNICO: Blend Moka</li>
                  <li>PAÍS DE ORIGEN: Brasil</li>
                  <li>REGIÓN DE ORIGEN: Espíritu Santo y Minas Gerais.</li>
                  <li>COSECHA: 2020</li>
                  <li>VARIEDAD: Robusta y Arábica</li>
                  <li>BENEFICIO: Lavado</li>
                  <li>TOSTADO: Medio</li>
                  <li>ALTITUD DE CULTIVO: 400m a 1.500m</li>
                  <li>PUNTUACIÓN: 84 puntos</li>
                  <li>NOTAS: Ciruela</li>
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
        style={{ backgroundImage: "url(images/5.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Yo orquesto mis mañanas al son del café. <br />
                  Harry Mahtar
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
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
export default BlogSingle;
