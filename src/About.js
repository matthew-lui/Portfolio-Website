import React from "react";
import Skills from "./Skills";
import Learning from "./Learning";

function About(props) {
  return (
    <div>
<section id="about-me" className="container mx-auto px-4 py-8 flex flex-col items-center pt-24">
  <h2 className="text-2xl font-semibold mb-4 text-center"></h2>
  <p className="mb-4">
    Hi there! I'm a Full Stack Software Engineer who loves building React
    applications. My toolbox is filled with skills like JavaScript, HTML,
    CSS, React, Ruby on Rails, and PostgreSQL. I'm always excited to dive
    into software engineering projects and contribute to the growth of the
    companies I work with.
  </p>
  <p className="mb-4">
    My experience in sales and business development, combined with my
    knack for designing growth strategies and managing client
    relationships, makes me a well-rounded addition to any software
    engineering team. I've successfully navigated the worlds of B2B and
    B2C sales, honing my skills in consultative sales, lead generation,
    account management, and contract design. I've even had the opportunity
    to work with Fortune 500 enterprises and become proficient with tools
    like HubSpot and Salesforce.
  </p>
  <p className="mb-4">
    My passion for technology and business keeps me on my toes, always
    striving to learn and stay ahead of the curve in this fast-paced
    industry.
  </p>
  <h3 className="text-xl font-semibold text-center">
    Programming Languages and Technical Skills
  </h3>
</section>
<Skills />

<h3 className="text-xl font-semibold text-center">
    Currently Learning
    <Learning />
  </h3>
        <div class="flex flex-col items-center">
  <h4 class="text-xl font-semibold mb-10 text-center">
    Experience
  </h4>
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
