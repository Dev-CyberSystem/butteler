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
                <h3>¿Qué es café blend?</h3>
                <p>
                  <img src="images/blend.png" alt="image" />
                </p>
                <h4>
                  Blend significa mezcla y se refiere a la elección de
                  diferentes granos o distintos orígenes para realizar una
                  combinación de café.Segui leyendo para saber verdaderamente
                  qué es un café blend.{" "}
                </h4>
                <p>
                  Hagamos un poco de historia. Luigi Lavazza fue el inventor del
                  concepto de blends de café en 1895 en la ciudad de Turín.
                  Entonces, ¿Qué es un café blend? La finalidad de esta idea,
                  fue lograr sumar distintas características a un mismo café. Un
                  ejemplo evidente es sumar cuerpo y crema a un grano arábica y
                  es agregar un pequeño porcentaje de grano robusta, que como
                  propiedad principal tiene cuerpo y crema. La genialidad de
                  esta invención es que mezclando distintos granos por tipo y/o
                  orígenes podemos lograr un café con la mejor calidad y con el
                  resultado en taza que pueden sumar distintas características
                  que serían imposibles de lograr con un solo grano de café.
                  Estos resultados son producto de una selección de primera
                  calidad de los distintos granos y probando diferentes tipos de
                  tueste de acuerdo al final que busquemos en taza. Actualmente
                  todas estas características están detalladas en las
                  descripciones que hacen nuestros expertos catadores para poder
                  llegar a los distintos gustos de los consumidores que cada vez
                  son más en distintas partes del mundo.
                </p>
                <p>
                  Verificación de origen únicos. Para lograr blends de acuerdo a
                  las preferencias de nuestros consumidores, debemos tener bien
                  definidos los orígenes y características de los distintos
                  granos. Los cafés que componen las mezclas Lavazza se
                  seleccionan en base a Lavazza y estándares internacionales.
                  Todas las muestras se someten a un adecuado proceso de cata
                  para garantizar su calidad. Los principales controles se
                  llevan a cabo en:
                  <li>
                    {" "}
                    Muestra de la oferta - control físico / organoléptico{" "}
                  </li>
                  <li>Muestra previa al envío: física / organoléptica</li>
                  <li>
                    Descarga de depósito aduanero lote - físico / organoléptico
                  </li>
                  <li>
                    {" "}
                    Llegada a las fábricas - verificación del estado de
                    conservación física + celular
                  </li>
                  A lo largo de los años, Lavazza ha establecido relaciones
                  directas y muy estrechas con los proveedores más importantes
                  de los principales países productores. Cada año, de hecho, los
                  catadores de nuestro Laboratorio junto con colegas del
                  Departamento de Compra de Café de Lavazza van al sitio local
                  para examinar y degustar las diversas cosechas de café nuevas
                  con el fin de estandarizar y comprar los cafés más adecuados
                  para las necesidades de Lavazza. Este trabajo ha permitido
                  catalogar los diferentes orígenes desde un punto de vista
                  organoléptico para disponer de una base de datos dividida en
                  grupos. Esto significa que siempre hay una "receta" (que
                  consta de varios orígenes) adecuada para crear un producto
                  Lavazza determinado.
                </p>
                <p>
                  El arte de mezclar. La mezcla es uno de los factores clave para
                  el éxito de un buen café. Esto se debe a que la combinación de
                  orígenes de diferentes partes del mundo produce una taza con
                  un sabor preciso, equilibrado y armonioso, gracias a las
                  características de los orígenes. Por lo general, las mezclas
                  compuestas solo de Arábica son más dulces y suaves, mientras
                  que las compuestas de Arábica y Robusta tienen cuerpo y son
                  más fuertes. África, Asia, Centro y Sudamérica, son todas
                  regiones cafetaleras productoras de diferentes tipos de cafés
                  que, en función de sus características, dan una taza con
                  cierto nivel de cuerpo, dulzor, fragancia y acidez (elementos
                  que denotan calidad en el café). Estos parámetros nos permiten
                  dar un carácter específico a un blend. Para que los blends
                  tengan un sabor constante en el tiempo y mantengan el mismo
                  perfil organoléptico, es fundamental conocer en profundidad
                  todos los diferentes cafés que se producen en el mundo y
                  realizar una cuidadosa selección previa. La calidad de los
                  cultivos individuales, de hecho, puede variar cada año debido
                  a diferentes factores ambientales.
                </p>
                <p>
                  Orígenes y perfil organoléptico. El arte de mezclar es un
                  asunto complejo. Simplemente hay demasiadas variables en
                  juego, empezando por sí es Robusta o Arábica, luego
                  procesamiento, altitud, variedades, etc. En términos muy
                  generales, podemos proporcionar una pequeña información de la
                  siguiente manera:
                  <li>
                    América del Sur (Colombia, Brasil, Perú, etc.):
                    relativamente templado y ligero. El café colombiano tiende a
                    ser más dulce y cítrico, mientras que el café brasileño
                    tiene un regusto menos limpio y más chocolate con leche y
                    notas más cremosas.
                  </li>
                  <li>
                    Centroamérica (Guatemala, Honduras, El Salvador, etc.):
                    estos cafés suelen ser muy equilibrados con una buena mezcla
                    de dulzor suave y algo de acidez agria y afrutada. A menudo
                    se describen como de sabor "limpio".
                  </li>
                  <li>
                    África (Etiopía, Kenia, etc.): estos cafés suelen
                    describirse como complejos, afrutados y florales. Tienen
                    sabores más fuertes, ricos en fragancias y con mucho cuerpo.
                  </li>
                  <li>
                    Asia (Indonesia, India, etc.): los cafés asiáticos tienden a
                    ser más terrosos y audaces que otros cafés. Los granos son
                    menos ácidos, más atrevidos y, a veces, incluso sabrosos.
                  </li>
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
