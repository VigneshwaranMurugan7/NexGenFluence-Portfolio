import React from "react";
import RevealOnScroll from '../components/RevealOnScroll'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative dark:bg-black"
    >
        <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          <span className="block">Welcome to</span>
          <span className="block">NexGenFluence</span>
        </h1>

        <p className="text-gray-400 text-3xl max-w-5xl mx-auto">
          where creativity meets strategy! We help businesses build a powerful
          online presence with engaging content, stunning visuals, and impactful
          social media marketing. Whether you're a restaurant, supermarket, or
          brand looking to grow, we've got you covered. Let's take your brand to
          the next level!
        </p>

        <div className="text-gray-400 text-3xl font-bold max-w-20xl mx-auto mt-20 mb-10">
          <h4>
            Content Creation | Social Media Management | Photography &
            Videography
          </h4>
          <h4>Let's Connect & Grow Together!</h4>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
            View Projects
          </a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500/50 py-3 px-6 rounded font-medium transition-all dureation-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2) hover:bg-blue-500/10">
                Contact Us
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
