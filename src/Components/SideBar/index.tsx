/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function SideBar() {
  return (
    <div>
      <img
        src="./image/telegram-photo-0-5321219727193914771.jpg"
        alt="photo Kateryna"
      />
      {/* <!-- contacts --> */}
      {/* <!-- tel, email, social networks --> */}
      <div>
        <ul>
          <h3>contacts</h3>
          <li>
            <a href="tel:+380663460366">+38 066 346 03 66</a>
          </li>
          <li>
            <a
              href="mailto:ketyclima@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              ketyclima@gmail.com
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/kateryna-klimchuk"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/katherine-klimchuk-5202b7164"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ketyclima/"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- tech skills --> */}
      <ul>
        <h3>tech skills</h3>

        <li>HTML5, CSS3, SASS, Tailwind CSS, styled-component</li>
        <li>JavaScript, ReactJS, NodeJS, Typescript, React native</li>
        <li>GIT, Cypress, GraphQl, Remix, WebPack, Parcel, Docker</li>
        <li>MongoDB, Supabase</li>
        <li>Jira, Trello, Figma, Canva</li>
      </ul>
      {/* <!-- soft skills --> */}
      <ul>
        <h3>soft skills</h3>

        <li>Teamwork</li>
        <li>Decision-making</li>
        <li>Communication</li>
        <li>Growth mindset</li>
      </ul>
      {/* <!-- Languages --> */}
      <ul>
        <h3>Languages</h3>

        <li>English - Intermediate</li>
        <li>Ukrainian - Native</li>
        <li>Russian - Native</li>
      </ul>
    </div>
  );
}
