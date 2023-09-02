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
                <h3>¿Cuál es la mejor hora para tomar café?</h3>
                <p>
                  <img src="images/tomando.jpeg" alt="image" />
                </p>
                <h4>
                  El hábito de tomar un café no discrimina horarios. En este
                  artículo te contamos cuál es el mejor momento para beber dicha
                  infusión.
                </h4>
                <p>
                  El consumo de café es parte de nuestra historia. Según la
                  Cámara Argentina de Café, en nuestro país se consume 1kg de
                  café por habitante por año. Además, según la mayoría de las
                  encuestas cubiertas por la base de datos de consumo de
                  alimentos de la Autoridad Europea de Seguridad Alimentaria
                  (EFSA) el café constituye la fuente más importante de cafeína
                  de los adultos, y representa entre el 40 % y el 94 % de la
                  ingesta total.
                  <br />
                  Respecto al mejor momento para beber café, ¿Qué dice la
                  ciencia? Para responder esta pregunta debemos remontarnos a la
                  composición de la infusión.
                  <br />
                  Si bien cuenta con numerosas sustancias no nutritivas en su
                  composición, la cafeína es uno de los principales compuestos
                  del café. La cafeína (1, 3, 7 trimetilxantina) es un alcaloide
                  presente en los granos, hojas o frutos de más de 60 especies
                  de plantas (café, té, cacao, guaraná, cola). Pertenece al
                  grupo de sustancias denominadas metilxantinas.
                  <br />
                  Tiene diversos efectos, entre los que se pueden mencionar los
                  siguientes:
                  <br />
                  <li>
                    Efecto diurético débil: puede corresponder tanto a un
                    aumento en la filtración glomerular como a un descenso en la
                    reabsorción tubular de sodio. No obstante, rápidamente se
                    desarrolla tolerancia y no hay evidencias que demuestren que
                    pueda interferir de manera significativa en el estado de
                    hidratación.
                  </li>
                  <li>Aumenta el estado de alerta</li>
                  <li>Mejora la función cognitiva</li>
                  <li>Efecto antidepresivo</li>
                  <li>Posterga la fatiga</li>
                  <li>Neuro protector</li>
                  <li>
                    Aumenta la sensibilidad del centro respiratorio al CO2
                  </li>
                  <li>Efectos inotrópicos + y cronotrópico – cardíacos</li>
                  <li>Incrementa la presión arterial</li>
                  <li>Incrementa la actividad de la renina plasmática</li>
                  <li>Incrementa la secreción de la médula suprarrenal</li>
                  <li>
                    Estimula la secreción gástrica y de enzimas digestivas
                  </li>
                  Según la EFSA, la ingesta de cafeína hasta 400mg consumida a
                  lo largo del día no tiene efectos perjudiciales para la salud
                  en la población general, excepto en el caso de las
                  embarazadas.
                  <br />
                  Por los efectos de la cafeína sobre el sistema nervioso
                  central (nerviosismo, irritabilidad, ansiedad, temblores,
                  insomnio, cefalea) se recomienda evitar el consumo de café
                  antes de ir a dormir para evitar problemas en la conciliación
                  de sueño posterior.
                  <br />
                  Además, dada la presencia de otros compuestos en el café que
                  interfieren en la absorción de ciertos metales divalentes como
                  el hierro y calcio, se desaconseja el consumo de café junto a
                  las comidas principales. Se recomienda alejar la ingesta del
                  mismo al menos 2 horas pre y pos comida.
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
                  No es que el café me de insomnio, es que me hace soñar
                  despierto.
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
