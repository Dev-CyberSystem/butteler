import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import { scrollAnimation } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import ProductsContext  from "../context/contexProductos";
const Layouts = ({ children }) => {
  useEffect(() => {
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
  });
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".js-parallax"), {
      speed: 0.65,
      type: "scroll",
    });
  }, []);

  return (
    <Fragment>
      <ImageView />
      <div className="bg">
        <Header />
        <ProductsContext>
        <div className="wrapper">{children}</div>
        </ProductsContext>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Layouts;
