/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Projects() {
  return (
    <div className="mb-2">
      <h2 className="bg-slate-200 max-w-max px-1 mb-1 rounded-sm">
        Project experience
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <a
            href="https://kateryna-klimchuk.github.io/goit-markup-hw-08/"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
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
                className="font-medium"
              >
                {" "}
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
            className="font-medium"
          >
            Ice Cream
          </a>

          <p>
            [HTML, css, SASS, JS, Parcel]. A company website with responsive
            layout.
            <span className="font-medium">
              <a
                href="https://github.com/kateryna-klimchuk/icecream-teamwork"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
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
            className="font-medium"
          >
            Image Searcher
          </a>
          <p>
            [HTML, CSS, JS, Parcel, Node.JS ]. Keyword search and image viewer
            application.
            <span className="font-medium">
              <a
                href="https://github.com/kateryna-klimchuk/goit-js-hw-11"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Code link.
              </a>
            </span>
          </p>
        </li>
        <li>
          <a
            href="https://kateryna-klimchuk.github.io/filmoteka-team-project/"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            Movie searcher
          </a>
          <p>
            [HTML, CSS, JS, Parcel, Node.JS, Firebase, Axios, Rest-api]. Keyword
            search and movie viewer application.
            <span className="font-medium">
              <a
                href="https://github.com/kateryna-klimchuk/filmoteka-team-project"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Code link.
              </a>
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
