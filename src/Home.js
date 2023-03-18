import React from "react";
import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <section id="home" class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <p class="mb-4">
          Hey there! I'm Matthew Lui, a Full Stack Software Engineer with a
          passion for creating seamless and engaging React applications. 
        </p>
        <p class="mb-4">
    
        </p>
        <p class="mb-4">
          Take a moment to explore my portfolio, where you'll find examples of
          my work, insights into my skills and expertise, and a glimpse into my
          journey as a software engineer. If you like what you see, feel free to
          get in touch! I'd love to hear from you and discuss potential
          collaborations or job opportunities.
        </p>
        <a
          href="/portfolio"
          class="text-xl font-semibold inline-block text-blue-500 hover:text-blue-700"
        >
           Explore My Portfolio &rarr;
        </a>
      </section>
    </div>
  );
}

export default Home;
