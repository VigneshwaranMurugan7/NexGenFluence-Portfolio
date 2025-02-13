import React from "react";
import RevealOnScroll from '../components/RevealOnScroll'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative dark:bg-black"
    >
        <RevealOnScroll>
      <div className=" z-10 px-4">
        <h2 className=" text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          <span className="block">About Us</span>
        </h2>

        <p className="text-gray-400 text-3xl max-w-5xl mx-auto">
          <span className="block text-center mb-6">
            At NexGenFluence, we believe that every brand has a story to tell.
            Our mission is to amplify your voice through engaging social media
            strategies, high-quality visuals, and creative storytelling.
          </span>
          <div className="mb-16">
            <span className="block ">We specialize in:</span>
            <span className="block">
              ✅ Managing Instagram pages for businesses
            </span>
            <span className="block">
              ✅ Professional photoshoots & video production
            </span>
            <span className="block">
              ✅ Creating eye-catching reels & short videos
            </span>
            <span className="block">
              ✅ Engaging content that drives results
            </span>
          </div>

          <span className="block text-center">
            Ready to make an impact? Let’s collaborate!
          </span>
        </p>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
