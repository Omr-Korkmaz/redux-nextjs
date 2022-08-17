import { Provider } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import store from "../store";
import calculateTotals from "../features/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
