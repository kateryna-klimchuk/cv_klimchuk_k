/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { IoLocationOutline } from "react-icons/io";
// import { FaBeer } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMapPin, FiInstagram } from "react-icons/fi";
import mainPhoto from "../../Images/PhotoRoom-20230109-112347.PNG";
export default function SideBar() {
  return (
    <div className="bg-slate-300 p-4 w-1/3">
      <img
        src={mainPhoto}
        alt="photo Kateryna"
        width={200}
        height={300}
        className="rounded-sm"
      />
      {/* <!-- contacts --> */}
      {/* <!-- tel, email, social networks --> */}
      <div>
        <ul className="pb-2 border-b-2">
          <h3 className="bg-pink-50 max-w-max my-2 px-1 rounded-sm">
            Contacts
          </h3>
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
          <li className="flex flex-start items-center">
            <FiMapPin className="mr-1" />
            Eindhoven, Netherlands
          </li>
        </ul>
        <ul className="py-2 border-b-2">
          <li className="flex flex-start items-center">
            <FiGithub className="mr-1" />

            <a
              href="https://github.com/kateryna-klimchuk"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="flex flex-start items-center">
            <FiLinkedin className="mr-1" />

            <a
              href="http://linkedin.com/in/katherine-klimchuk-5202b7164"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
          <li className="flex flex-start items-center">
            <FiInstagram className="mr-1" />

            <a
              href="https://www.instagram.com/ketyclima/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- tech skills --> */}
      <ul className="list-disc pl-2">
        <h3 className="bg-pink-50 max-w-max my-2 px-1 rounded-sm">
          Tech skills
        </h3>

        <li>HTML5, CSS3, SASS, Tailwind CSS, styled-component</li>
        <li>JavaScript, ReactJS, NodeJS, Typescript, React native</li>
        <li>GIT, Cypress, GraphQl, Remix, WebPack, Parcel, Docker</li>
        <li>MongoDB, Supabase</li>
        <li>Jira, Trello, Figma, Canva</li>
      </ul>
      {/* <!-- soft skills --> */}
      <ul className="list-disc pl-2">
        <h3 className="bg-pink-50 max-w-max my-2 px-1 rounded-sm">
          Soft skills
        </h3>

        <li>Teamwork</li>
        <li>Decision-making</li>
        <li>Communication</li>
        <li>Growth mindset</li>
      </ul>
      {/* <!-- Languages --> */}
      <ul className="list-disc pl-2">
        <h3 className="bg-pink-50 max-w-max my-2 px-1 rounded-sm">Languages</h3>

        <li>English - level B2</li>
        <li>Ukrainian - Native</li>
        <li>Russian - Native</li>
      </ul>
    </div>
  );
}
