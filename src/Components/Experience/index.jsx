import React from "react";

export default function Experience() {
  return (
    <div className="mb-2 border-b-2">
      <h2 className="bg-slate-200 max-w-max px-1 mb-1 rounded-sm">
        Work Experience
      </h2>
      <ul className="p-2">
        <li className="pb-4 border-b-2">
          <h3 className="font-medium">Simbuka</h3>
          <p>Front-end developer</p>
          <h4>September 2022 - current time</h4>
          <ul className="list-disc pl-4">
            <li>
              Using ReactJS, Typescript, Node.js, Remix, Tailwind CSS,
              Storybook, Docker, GraphQl, Cypress, Heroku, work with database:
              Supabase, Prisma, MongoDB, CMS systems and different libraries to
              bring concepts to life;
            </li>
            <li>Developing and maintaining the user interface;</li>
            <li>Developing and maintaining own component library;</li>
            <li>
              Developing and implementing new features into working programming
              systems;
            </li>
            <li>Testing new implementations</li>
          </ul>
        </li>
        <li></li>
        <li className="pb-4 border-b-2">
          <h3 className="font-medium pt-2">Freelance - self-employed</h3>
          <p>Front-end developer</p>
          <h4>January 2022 - September 2022</h4>
          <ul className="list-disc pl-4">
            <li>
              Using HTML, JS, CSS/SASS, Webpack, Node.js and different libraries
              to bring concepts to life;
            </li>
            <li>Developing and maintaining the user interface;</li>
            <li>Experience with adaptive layout</li>
          </ul>
        </li>
        <li>
          <h3 className="font-medium pt-2">Company - LLO "Wine Bureau"</h3>
          <p>Sales manager in the delivery department</p>
          <h4>March 2017 - March 2021</h4>
          <ul className="list-disc pl-4">
            <li>Maintaining positive relationships with customers;</li>
            <li>
              Leading the service delivery team, managing conflict and ensuring
              the team's processes and tasks are carried out efficiently;
            </li>
            <li>Managing finances and budgets;</li>
            <li>Assessing customer feedback to improve and refine services.</li>
          </ul>
        </li>
        {/* <li>
      <h3>Company - LLO "Wine Bureau"</h3>
      <p>Seller</p>
      <h4>September 2010 - March 2017</h4>
      <ul>
        <li>Order out of stock products via 1C Astor;</li>
        <li>Provide excellent customer service;</li>
        <li>Stock and replace products to avoid any damages.</li>
      </ul>
    </li> */}
      </ul>
    </div>
  );
}
