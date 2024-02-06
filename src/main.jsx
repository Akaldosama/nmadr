import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store/index.jsx";
import { AuthorSlice } from "./features/Authors/AuthorSlice.jsx";
import { BooksSlice } from "./features/Books/BooksSlice.jsx";
import { CategoriesSlice } from "./features/Categories/CategoriesSlice.jsx";
store.dispatch(AuthorSlice.endpoints.getAuthors.initiate())
store.dispatch(BooksSlice.endpoints.getBooks.initiate())
store.dispatch(CategoriesSlice.endpoints.getCategory.initiate())


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>  
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
