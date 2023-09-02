import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Blog3 = () => {
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
              Brazil Pedra Azul
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/pedraAzulLarge.png)" }}
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
                    Esta combinación inigualable de cafés del Cerrado, Sur de
                    Minas y Mogiana se presenta con una zaranda 19. Ofrece
                    equilibrio de cuerpo y fruto en la taza. Pedra Azul fue
                    creado para el mercado mundial y se lo ha acogido muy bien
                    en Europa, Japón y en el mercado de Specialty de Estados
                    Unidos. Bebida suave y dulce.
                  </p>
                </blockquote>
                <ul>
                  <li>NOMBRE TÉCNICO: Pedra Azul</li>
                  <li>
                    DESCRIPCIÓN: Esta combinación inigualable de cafés se
                    presenta con una zaranda 19.
                  </li>
                  <li>COSECHA: 2021</li>
                  <li>REGIÓN: Cerrado, Sur de Minas, Mogiana.</li>
                  <li>Blend de distintas variedades botánicas Arábigas.</li>
                  <li>BENEFICIO: Natural cerezas secas al sol.</li>
                  <li>ALTURA: 900 mts</li>
                  <li>PUNTUACIÓN: 84 puntos</li>
                  <li>
                    NOTAS DE CATA: Bebida suave y dulce. Notas frutales. Fina
                    acidez fragante y aromático.
                  </li>
                </ul>
                <p>
                  <br />
                </p>
                <h3>Temperatura ideal para tu cafe</h3>
                <p>
                  <img src="images/temperatura.jpg" alt="image" />
                </p>
                <h4>
                  La temperatura del agua es tan importante como la calidad de
                  la misma, para poder obtener en taza el café deseado.
                </h4>
                <p>
                  ¿Cuál es la temperatura ideal para un café? Para tener el café
                  deseado, necesitamos obtener la temperatura justa de esa
                  preparación. En la mayoría de las extracciones utilizadas, ya
                  sea espresso, o filtro o prensa francesa, etc., se elige una
                  temperatura de 92°/93°C, nunca superar los 95°C. A estas
                  temperaturas podemos obtener los aromas y sabores que queremos
                  extraer de ese café tostado, si nos pasamos de esos límites
                  podemos malograr el café agregándole amargor o hasta gusto a
                  quemado o ceniza
                </p>

                <p>
                  ¿Qué pasa si superamos la temperatura ideal? Como siempre digo
                  en la preparación del café, interviene la química, pero en
                  este caso le sumamos la física. Como todos sabemos el agua
                  hierve a 100ºC pero esto no es verdad, salvo que estemos a
                  nivel del mar, tanto a 500 mt de altura como a 2000 mt o más
                  el agua hierve mucho antes de alcanzar los 100 °C. Por ejemplo
                  a 500 mt el agua herviría a 98°C, a 2000 mt 93°C y a 4000 mt
                  86°C. Estas variables de altura y temperatura deben tenerse en
                  cuenta para obtener el café que deseamos. Pero debemos estar
                  atentos a otros parámetros que también influyen en la altura,
                  como la presencia de oxígeno en el aire, la temperatura
                  ambiente, la humedad, etc. Entonces si no estamos atentos a
                  estas variables, podemos superar la temperatura ideal y
                  obtener un café con sabores desagradables.
                </p>
                <p>
                  ¿ La temperatura debe ser siempre la misma? Para lograr una
                  buena taza de café debemos lograr una temperatura constante en
                  la extracción. Siempre tenemos que estar atentos a todas las
                  variables porque la más mínima distracción puede arruinar
                  todos los cuidados previos. Por ejemplo: Si un barista, en una
                  máquina de gastronomía está atento a todos los detalles
                  previos y en el momento de colocar el filtro en el grupo para
                  empezar la erogación del café, se olvida de apretar el botón
                  para iniciarla por buscar una taza que todavía no tenia a
                  mano, estaría quemando el café por la temperatura de los
                  metales e influyendo en el resultado de la taza.
                </p>
                <p>
                  ¿ Y si usamos una temperatura más baja? En el caso del
                  espresso, es imposible. Tenemos que estar atentos a las
                  variables descritas más arriba. Ahora, en otros tipos de
                  extracciones como el café filtrado, ya sea por el sistema
                  conocido del filtro de papel o algún otro sistema similar,
                  podemos utilizar temperaturas más bajas, inferiores a 90ºC. Lo
                  que va a suceder es que con menor temperatura, los tiempos de
                  extracción son más largos y esto nos otorga un café más
                  aromático y con mayor acidez que de la manera tradicional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/3.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  No hay nada como una taza de café para estimular las células
                  del cerebro. <br />
                  Sherlock Holmes
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
export default Blog3;
