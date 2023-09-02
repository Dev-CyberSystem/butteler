import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Blog4 = () => {
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
              Brazil Santos Cerrado
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/santosCerradoLarge.png)" }}
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
                  <p>Gran cuerpo - baja acidez - dulce.</p>
                </blockquote>
                <ul>
                  <li>NOMBRE TÉCNICO: Santos Cerrado</li>
                  <li>DESCRIPCIÓN: Gran cuerpo - baja acidez - dulce.</li>
                  <li>COSECHA: 2022</li>
                  <li>REGIÓN: Cerrado Minerio, Minas Gerais</li>
                  <li>VARIETAL: Arábiga</li>
                  <li>BENEFICIO: Natural</li>
                  <li>ALTURA: 900 a 1000 msnm</li>
                  <li>PUNTUACIÓN: 84 puntos</li>
                  <li>
                    NOTAS DE CATA: Aroma a frutos secos, con sabor a chocolate
                  </li>
                </ul>
                <p>
                  <br />
                </p>
                <h3>¿Cómo preparar el café perfecto?</h3>
                <p>
                  <img src="images/cafe.jpg" alt="image" />
                </p>
                <h4>
                  ¿Cuál es el secreto para hacer el café perfecto? En este
                  artículo te contamos los factores determinantes para elaborar
                  el mejor café.
                </h4>
                <p>
                  El café es una infusión declarada patrimonio cultural
                  inmaterial por la UNESCO. En Argentina, según la Cámara de
                  Café, se consume 1 kg de café por habitante al año. Esta
                  bebida tiene la capacidad de ofrecer sabores y aromas muy
                  complejos que la posicionan más allá de una simple infusión
                  estimulante. La matriz de sabores y aromas característicos del
                  café surge de ser un producto cuidado a lo largo de toda la
                  cadena de producción, existiendo diversos factores que
                  influyen sobre la misma. Por lo expuesto, preparar el café
                  perfecto no depende exclusivamente de tener una buena
                  cafetera, sino que los parámetros determinantes de la calidad
                  del café se remontan a las características de la materia prima
                </p>

                <p>
                  ¿Qué tener en cuenta para preparar el café perfecto?
                  <br /> CALIDAD DEL GRANO DE CAFÉ: El cultivo sostenible del
                  grano de café se destaca por su excelencia frente a otros
                  tipos de cultivos (Factores como la planta de café, el
                  terruño, las características del grano y el tiempo de
                  tostación influyen en la calidad del mismo). <br />
                  MOLIENDA: El café posee compuestos que se oxidan rápidamente
                  en contacto con el oxígeno. Moler el café justo antes de
                  prepararlo mantiene intacto estos compuestos optimizando la
                  calidad de la infusión. La molienda debe ser realizada en
                  pequeñas cantidades ya que, una vez molido pierde su aroma. La
                  variable molienda afecta el resultado final. No debe ser ni
                  muy fino (no permitiría el paso del agua a través de él), ni
                  muy grueso (pasaría rápidamente y no se impregnaría del aroma,
                  sabor y color). <br />
                  ALMACENAMIENTO ADECUADO DEL CAFÉ: Los granos que no se usen de
                  inmediato deben mantenerse en un recipiente hermético y lejos
                  de la luz solar. <br /> PROPORCIÓN CORRECTA DE CAFÉ Y AGUA
                  POTABLE: Dos aspectos claves son la dosis de café utilizada,
                  así como también la temperatura del agua. La cantidad de café
                  por dosis está entre los 5 y los 7 gramos. La temperatura del
                  agua debe estar entre los 94 y 96º C, no tiene que hervir.{" "}
                  <br />
                  TÉCNICA: La precisión es importante al momento de preparar un
                  excelente café. Cada método de preparación tiene su propia
                  técnica, pero al hacer lo mismo una y otra vez, se corrigen
                  errores y se mejora gradualmente. <br />
                  USO DE EQUIPOS DE CALIDAD: Se obtendrán mejores resultados con
                  herramientas de alta calidad. Es una inversión inicial, pero
                  en el largo plazo vale la pena. Es fundamental la correcta
                  higiene y el mantenimiento de la máquina utilizada, los cuales
                  deben estar garantizados desde el inicio del proceso de
                  elaboración.
                </p>
              </div>
              {/* <div
                className="post-details element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span className="tags-links">
                  <span>Tags:</span>
                  <Link href="blog">photo</Link>
                  <Link href="blog">fashion</Link>
                  <Link href="blog">creative</Link>
                </span>
              </div> */}
              {/* Comments */}
              {/* <div
                className="comments-post element-anim-1 scroll-animate"
                data-animate="active"
              >
               
                <div className="section__comments">
                  <h4
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    3 Comments
                  </h4>
                  <ul className="comments">
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                          className="avatar"
                          alt
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              Alex Morrison <span>March 9, 2021</span>
                            </h5>
                            <p>
                              Gallery blocks have two settings: the number of
                              columns, and whether or not images should be
                              cropped. The default number of columns is three,
                              and the maximum number of columns is eight. Below
                              is a three column gallery at full width, with
                              cropped images.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                          className="avatar"
                          alt
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              John Doe <span>March 9, 2021</span>
                            </h5>
                            <p>
                              Gallery blocks have two settings: the number of
                              columns, and whether or not images should be
                              cropped. The default number of columns is three,
                              and the maximum number of columns is eight. Below
                              is a three column gallery at full width, with
                              cropped images.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="form-comment">
                    <div className="comment-respond">
                      <div className="m-titles">
                        <h4
                          className="element-anim-1 scroll-animate"
                          data-animate="active"
                        >
                          Leave a comment
                        </h4>
                      </div>
                      <form method="post" className="kf-comment-form">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <textarea
                                className="textarea"
                                rows={3}
                                placeholder="Comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="submit" className="kf-btn">
                              <span>Submit</span>
                              <i className="fas fa-chevron-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/4.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  El café es un bálsamo para el corazón y el espíritu. <br />
                  Giuseppe Verdi
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
export default Blog4;
