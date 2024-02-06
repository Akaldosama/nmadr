import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Authors from "./features/Authors/Authors";
import Books from "./features/Books/Books";
import Categories from "./features/Categories/Categories";
import SingleBook from "./features/Books/SingleBook";
import './Homework.css'

export default function App() {
  return (
    <div className="wrapper">
      <aside>
        <ul>
            <li><Link to="/" className="post">Authors</Link></li>
            <li><Link to="/book" className="post">Books</Link></li>
            <li><Link to="/category" className="post">Category</Link></li>
        </ul>
      </aside>
      <div className="parent">
        <Routes>
          <Route path="/" element={<Authors />} />
          <Route path="book" element={<Books />} />
          <Route path="category" element={<Categories />} />
          <Route path="single_book/:id" element={<SingleBook />} />
        </Routes>
      </div>
    </div>
  );
}
