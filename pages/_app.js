import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment } from "react";
import { ProductosContext } from "@/src/context/contexProductos";
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
        <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
