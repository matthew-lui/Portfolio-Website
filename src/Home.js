import React from 'react';
import { NavLink } from 'react-router-dom';
import ResumeModal from './ResumeModal';
import NYCSkyline from './NYCSkyline.jpg';


function Home(props) {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-24">
      <img alt="nyc-downtown"className="h-60 w-full md:w-auto" src={NYCSkyline}></img>
      <section id="home" className="container mx-auto px-0 py-2 md:py-10 text-center md:px-20">
        <h1 className="text-3xl font-bold mb-0 sm:text-3xl">FULL STACK SOFTWARE ENGINEER</h1>
        <div>
        <h1 className="mt-3 mb-5">
          <ResumeModal />
        </h1>
          <h2 className="text-2xl font-bold mb-2 sm:text-xl">
            Welcome to My Portfolio Website
          </h2>
        </div>
        <p className="mb-4 text-lg sm:text-l">
          I'm Matthew Lui, a Full Stack Software Engineer with a passion for
          creating seamless and engaging applications.
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
          className="text-l font-semibold inline-block text-blue-500 hover:text-blue-700"
        >
          Explore My Portfolio &rarr;
        </NavLink>

      </section>
    </div>
  );
}

export default Home;
