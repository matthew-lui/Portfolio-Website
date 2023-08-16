import React from "react";
import Skills from "./Skills";
import Learning from "./Learning";

function About(props) {
  return (
    <div>
      <div>
      <section
        id="about-me"
        className="container mx-auto px-4 py-8 flex flex-col items-center pt-24"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center"></h2>
        <p className="mb-4 text-center">
          I bring a diverse skill set, including expertise in JavaScript, HTML, CSS,
          React, Ruby on Rails, and PostgreSQL. My passion for technology and
          unwavering drive to learn fuel my enthusiasm for participating in
          groundbreaking software engineering projects and significantly
          impacting a company's growth.
        </p>
        <p className="mb-4 text-center">
          In addition to my technical knowledge, I have a robust background in
          sales and business development. This experience has equipped me with
          the ability to formulate growth strategies and efficiently manage
          client relationships. My well-rounded skills make me a valuable
          addition to any software engineering team.
        </p>
        <p className="mb-4 text-center">
          Throughout my professional experience, I have skillfully traversed
          both B2B and B2C sales scenarios, honing my skills in consultative
          sales, lead generation, account management, and contract drafting.
          I've even had the chance to work with Fortune 500 companies and become
          proficient in powerful tools like HubSpot and Salesforce.
        </p>

        <p className="mb-4 text-center">
          My enthusiasm for technology and business consistently pushes me to learn
          and remain at the cutting edge of this rapidly changing industry. As a
          result, I am always ready to tackle new challenges and contribute to
          the success of the companies I partner with.
        </p>
        <h3 className="text-xl font-semibold text-center">
          Programming Languages and Technical Skills
        </h3>
      </section>
      </div>
      <Skills />

      <h3 className="text-xl font-semibold text-center">
        Currently Learning
        <Learning />
      </h3>
      <div class="flex flex-col items-center">
        <h4 class="text-xl font-semibold mb-10 text-center">Experience</h4>
        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 justify-center">
          <li>Web Design</li>
          <li>Front End Development</li>
          <li>Back End Development</li>
          <li>Sales & Business Development</li>
          <li>Business Planning</li>
          <li>Expansion Strategy Design</li>
          <li>Consultative Sales</li>
          <li>Client Retention</li>
          <li>Marketing & Branding</li>
          <li>Client Relationship Management</li>
          <li>Account Management</li>
          <li>Contract Design and Negotation</li>
          <li>Sales Pipeline Development</li>
          <li>Lead Generation</li>
          <li>Enterprise Sales</li>
          <li>Client Onboarding</li>
          <li>HubSpot</li>
          <li>Salesforce</li>
          <li>CRM</li>
          <li>Customer Service</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
