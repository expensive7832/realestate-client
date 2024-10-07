import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import Loading from './Layout/loader/Loader';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </Suspense>

  </React.StrictMode>
);

