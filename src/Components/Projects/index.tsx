/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Projects() {
  return (
    <ul>
      <h2>Project experience</h2>

      <li>
        <a
          href="https://kateryna-klimchuk.github.io/goit-markup-hw-08/"
          target="_blank"
          rel="noreferrer"
        >
          Webstudio
        </a>

        <p>
          [HTML, SASS, JS]. A website with a responsive layout.
          <span>
            <a
              href="https://github.com/kateryna-klimchuk/goit-markup-hw-08"
              target="_blank"
              rel="noreferrer"
            >
              Code link.
            </a>
          </span>
        </p>
      </li>
      <li>
        <a
          href="https://kateryna-klimchuk.github.io/icecream-teamwork/"
          target="_blank"
          rel="noreferrer"
        >
          Ice Cream
        </a>

        <p>
          [HTML, css, SASS, JS, Parcel]. A company website with responsive
          layout.
          <span>
            <a href="https://github.com/kateryna-klimchuk/icecream-teamwork">
              Code link.
            </a>
          </span>
        </p>
      </li>
      <li>
        <a
          href="https://kateryna-klimchuk.github.io/goit-js-hw-11/"
          target="_blank"
          rel="noreferrer"
        >
          Image Searcher
        </a>
        <p>
          [HTML, CSS, JS, Parcel, Node.JS, ]. Keyword search and image viewer
          application.
          <span>
            <a
              href="https://github.com/kateryna-klimchuk/goit-js-hw-11"
              target="_blank"
              rel="noreferrer"
            ></a>
            Code link.
          </span>
        </p>
      </li>
    </ul>
  );
}
