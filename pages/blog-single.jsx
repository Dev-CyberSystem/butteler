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
              Brazil Moka
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/mokaLarge.png)" }}
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
                    Esta variedad se destaca por su marcada buena acidez y
                    cremosidad. Además, predomina el sabor cítrico con aroma
                    floral.
                  </p>
                </blockquote>
                <ul>
                  <li>NOMBRE TÉCNICO: Moka</li>
                  <li>
                    DESCRIPCIÓN: Variedad que se destaca por su buena acidez y
                    cremosidad.{" "}
                  </li>
                  <li>COSECHA: 2021</li>
                  <li>REGIÓN: Cerrado Minerio, Minas Gerais</li>
                  <li>VARIETAL: Arábiga</li>
                  <li>BENEFICIO: Natural</li>
                  <li>ALTURA: 900 mts</li>
                  <li>PUNTUACIÓN: 83 puntos</li>
                  <li>
                    NOTAS DE CATA: Aroma floral. Cítrico con buen dulzor y buena
                    acidez.{" "}
                  </li>
                </ul>
                <p>
                  <br />
                </p>
                <h3>¿CÓMO HACER UN EXQUISITO CAFÉ CON CREMA?</h3>
                <p>
                  <img src="images/latest_blog1.jpg" alt="image" />
                </p>
                <p>
                  Si sos fanático del café y te gusta combinar sabores fuertes y
                  suaves a la vez este artículo está hecho para vos. Hoy te voy
                  a compartir el paso a paso para elaborar un exquisito café con
                  crema. <br /> Seguro estarás pensando ¿qué tan complejo
                  resulta elaborar un café con crema? y la respuesta es muy
                  sencilla, ninguna, pero la finalidad del artículo es repasar
                  algunas recomendaciones que te van a ser muy útiles al momento
                  de preparar la infusión. <br /> Para comenzar, te voy a
                  compartir información nutricional de la preparación: <br />
                  El café con crema no es una infusión que te recomendaría beber
                  libremente. La crema es un alimento de origen animal no
                  lácteo, compuesto por grasas saturadas. <br />
                  No obstante, podría ser una muy buena idea para preparar en
                  alguna ocasión especial donde querés darle ese toque
                  distintivo al café. La forma de elaboración es muy sencilla:{" "}
                  <br /> Preparar el café de tu preferencia y una vez listo
                  agregar por encima 1 cucharada sopera de crema previamente
                  batida. <br /> A la crema podés batirla con 1 cucharadita de
                  azúcar (si preferís una preparación más dulce) o agregarle
                  esencia de vainilla. También, una vez servido podés
                  espolvorear con cacao, chocolate amargo rallado o canela.{" "}
                  <br /> Qué pasa si…“No consumo crema por razones
                  nutricionales, éticas, sociales o de la índole que sea ¿
                  existe alguna variante que lo reemplace?”. Quizá no sea
                  posible un reemplazo con las características organolépticas de
                  la crema de leche pero a continuación te comparto una crema de
                  origen vegetal muy deliciosa y nutritiva.
                </p>

                <p>
                  Crema vegetal a base de castañas de cajú <br />
                  INGREDIENTES
                  <br />
                  <li>2 tazas de bebida vegetal</li>
                  <li>½ taza de dátiles</li>
                  TIEMPO DE PREPARACIÓN
                  <li>10 min.</li>
                  PREPARACIÓN
                  <li>
                    Verter ambos ingredientes en la licuadora y licuar hasta
                    obtener una mezcla homogénea.
                  </li>
                  <li>
                    Pasar por un paño de microfibra para quitar los restos de
                    fruta.
                  </li>
                  <li>
                    Una vez listo, añadir al café ya elaborado, 1 cucharada
                    sopera de la crema vegetal.
                  </li>
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
        style={{ backgroundImage: "url(images/2.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  El café huele a cielo recién molido. <br />
                  Jessi Lane Adams
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
export default BlogSingle;
