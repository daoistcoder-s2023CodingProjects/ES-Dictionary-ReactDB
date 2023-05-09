import React from "react";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <main class="main-container">
      <Navbar />
      <div className="content">
        <div className="recent-search">
          <h2>Recent Search</h2>
          <ul className="search-list">
            <li>
              <a href="#0">APPLE</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
          </ul>
        </div>
        <div className="dictionary">
          <div className="upper">
            <img src="./images/dictionary/apple.jpg" alt="" />
            <div className="desc">
              <h1>Apple</h1>
              <p>Phonetics: $pple</p>
            </div>
          </div>
          <div className="lower">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam animi minima cum corporis obcaecati atque voluptatibus
              fuga, consequuntur, veritatis consequatur expedita rem ab nam?
              Rerum aut ut quos eos? Consequuntur?
            </p>
            <div className="audio"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
