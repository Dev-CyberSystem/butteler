import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".kf-gallery-items", {
        itemSelector: ".kf-gallery-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-gallery-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-gallery">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Productos
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Café Organico
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-gal element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("fast-food")}
            data-href="fast-food"
          >
            Tostado sin Azucar
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-coffee")}
            data-href="hot-coffee"
          >
            Hot coffee
          </a>
          <a
            className="c-pointer"
            data-href="dinner-menu"
            onClick={handleFilterKeyChange("dinner-menu")}
          >
            Dinner menu
          </a>
          <a
            className="c-pointer"
            data-href="special-pizza"
            onClick={handleFilterKeyChange("special-pizza")}
          >
            Special pizza
          </a>
        </div>
        <div className="kf-gallery-items row">
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe1.jpeg" className="has-popup-gallery">
                  <img src="images/cafe1.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Cafe de Altura</div>
                </div>
                <div className="subname">
                  <div className="value">Tostado sin Azucar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe2.jpeg" className="has-popup-gallery">
                  <img src="images/cafe2.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">italian pasta</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe3.jpeg" className="has-popup-gallery">
                  <img src="images/cafe3.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Chicken burger</div>
                </div>
                <div className="subname">
                  <div className="value">Tostado sin Azucar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe4.jpeg" className="has-popup-gallery">
                  <img src="images/cafe4.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">italian pizza</div>
                </div>
                <div className="subname">
                  <div className="value">special pizza</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe5.jpeg" className="has-popup-gallery">
                  <img src="images/cafe5.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">cappuccino</div>
                </div>
                <div className="subname">
                  <div className="value">Tostado sin Azucar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe6.jpeg" className="has-popup-gallery">
                  <img src="images/cafe6.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Chicken nuggets</div>
                </div>
                <div className="subname">
                  <div className="value">Tostado sin Azucar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe7.jpeg" className="has-popup-gallery">
                  <img src="images/cafe7.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Black coffee</div>
                </div>
                <div className="subname">
                  <div className="value">Tostado sin Azucar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/cafe8.jpeg" className="has-popup-gallery">
                  <img src="images/cafe8.jpeg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Spaghetti</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/menu_r6.jpg" className="has-popup-gallery">
                  <img src="images/menu_r6.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Sea Fish</div>
                </div>
                <div className="subname">
                  <div className="value">dinner menu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
