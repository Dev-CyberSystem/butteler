import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Orgánico
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Café Orgánico <br />
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  El café orgánico destaca por ser cultivado sin el uso de
                  pesticidas ni fertilizantes sintéticos, lo que preserva la
                  salud del suelo, la biodiversidad y la calidad del agua. Su
                  proceso de producción sostenible respeta el equilibrio
                  natural, resultando en granos de café libres de residuos
                  químicos y con sabores más auténticos. Al elegir café
                  orgánico, apoyas prácticas agrícolas responsables y disfrutas
                  de una taza que beneficia tanto a tu bienestar como al medio
                  ambiente.
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/cafe10.jpeg" alt="image" />
                <div>
                  Una taza de café no cambiará el mundo, pero es un gran
                  comienzo
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/cafe9.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-restaurant">
                    <img src="images/service1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Productos</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-coffee">
                    <img src="images/service2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Shop</h5>
                </div>
              </div>
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/service3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <h5 className="name">Food Services</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        // style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Cafés más populares
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Cafés más populares
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(images/menu_logo.png)" }}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/brazilMoka.png" className="has-popup-image">
                      <img src="images/brazilMoka.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Brazil Moka</h5>
                    <div className="subname">500g, 100% orgánico</div>
                    <div className="price">$3500</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/blendGoat.png" className="has-popup-image">
                      <img src="images/blendGoat.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Blend Goat</h5>
                    <div className="subname">500g, 100% orgánico</div>
                    <div className="price">$4500</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ilado.png" className="has-popup-image">
                      <img src="images/ilado.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Brazil Ilado</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$3.5</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/pedraAzul.png" className="has-popup-image">
                      <img src="images/pedraAzul.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Brazil Pedra Azul</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$6.0</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/santosCerrado.png" className="has-popup-image">
                      <img src="images/santosCerrado.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Brazil Santos Cerrado</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$2.8</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/timanaHuila.png" className="has-popup-image">
                      <img src="images/timanaHuila.png" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Timaná Huila</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$7.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/granos.jpg" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Por que elegirnos{" "}
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  En Butteler conocemos de café
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                En Butteler, el café es nuestra pasión y expertise. Conocemos cada matiz, desde el cultivo hasta la taza, y nos enorgullece ofrecerte una experiencia única en cada sorbo. Nuestra profunda comprensión del mundo del café nos permite seleccionar los granos más excepcionales, tostarlos con precisión y presentarte una variedad de perfiles de sabor que deleitarán tus sentidos. Explora nuestro universo aromático y déjate llevar por el conocimiento y la pasión que ponemos en cada taza que servimos. Bienvenido a un viaje inigualable en el mundo del café, ¡bienvenido a Butteler!
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Granos de café natural</h5>
                      <div className="subname">
                        Nuestros granos de café son 100% naturales, sin aditivos ni conservantes.
                        Provienen de las mejores plantaciones de café de Brazil, Colombia y Bolivia.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Garantia de satisfacción</h5>
                      <div className="subname">
                        Esto garantiza que nuestros productos cumplen con los estándares de calidad más altos.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      {/* <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cafe1.jpeg" className="has-popup-image">
                    <img src="images/cafe1.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cafe2.jpeg" className="has-popup-image">
                    <img src="images/cafe2.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cafe3.jpeg" className="has-popup-image">
                    <img src="images/cafe3.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cage4.jpeg" className="has-popup-image">
                    <img src="images/cage4.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cafe5.jpeg" className="has-popup-image">
                    <img src="images/cafe5.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Black Coffee</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/cafe6.jpeg" className="has-popup-image">
                    <img src="images/cafe6.jpeg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal3.jpg" className="has-popup-image">
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino</h5>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal4.jpg" className="has-popup-image">
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Coffee</h5>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Black Coffee</h5>
                </div>
              </div>
            </SwiperSlide> */}
          {/* </Swiper>
        </div>
      </section> */}
      {/* Section Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}
      {/* Section Numbers */}
      {/* <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">256+</div>
                <div className="desc">
                  <h5 className="name">Premium Clients</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">362+</div>
                <div className="desc">
                  <h5 className="name">Expert Members</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">753+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Latest Blog */}
      {/* <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Blog
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Conocé más sobre café
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    Decisions For Building Flexible Components DevTools Browser
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/2.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                {/* <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Coffee House
                </div> */}
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  El café es un tipo de magia que puedes tomar.
                </h3>
              </div>
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
