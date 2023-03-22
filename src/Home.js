import React from 'react';
import { NavLink } from 'react-router-dom';


function Home(props) {
  return (
    <div className="flex items-center justify-center pt-24">
      <section id="home" className="container mx-8 px-20 py-20 text-center sm:px-5 md:px-40">
        <h1 className="text-3xl font-bold mb-7 sm:text-4xl">FULL STACK SOFTWARE ENGINEER</h1>
        <div>
          <h2 className="text-2xl font-bold mb-2 sm:text-xl">
            Welcome to My Portfolio Website
          </h2>
        </div>
        <p className="mb-4 text-lg sm:text-l">
          I'm Matthew Lui, a Full Stack Software Engineer with a passion for
          creating seamless and engaging React applications.
        </p>
        <p className="mb-4"></p>
        <p className="mb-4 text-lg sm:text-l">
          Take a moment to explore my portfolio, where you'll find examples of
          my work, insights into my skills and expertise, and a glimpse into my
          journey as a software engineer. If you like what you see, feel free
          to get in touch! I'd love to hear from you and discuss potential
          collaborations or job opportunities.
        </p>
        <NavLink
          to="/portfolio"
          className="text-xl font-semibold inline-block text-blue-500 hover:text-blue-700"
        >
          Explore My Portfolio &rarr;
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
