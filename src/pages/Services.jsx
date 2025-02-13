import React from "react";
import CardImg from "../assets/Card.jpg";
import Card from "../components/Card";
import RevealOnScroll from '../components/RevealOnScroll'

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center relative pt-20 dark:bg-black"
    >
        <RevealOnScroll>
      <div className=" z-10 px-4">
        <h2 className=" text-center text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          <span className="block">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Card
            imageSrc={CardImg}
            title="Content Creation"
            items={[
              "Professional photography & videography",
              "Reels & short-form videos",
              "Creative post designs & branding",
            ]}
          />
          <Card
            imageSrc={CardImg}
            title="Social Media Management"
            items={[
              "Instagram page handling",
              "Content scheduling & posting",
              "Audience engagement & growth strategies",
            ]}
          />

          <Card
            imageSrc={CardImg}
            title="Video Editing & Reels"
            items={[
              "High-quality edits for Instagram & social media",
              "Trendy, engaging, and share-worthy content",
            ]}
          />

          <Card
            imageSrc={CardImg}
            title="Marketing & Growth Strategy"
            items={[
              "Hashtag research & analytics",
              "TBrand positioning & campaign planning",
              "Influencer collaborations"
            ]}
          />
        </div>

        <span className="block text-center text-gray-400 text-3xl max-w-5xl mx-auto my-9 font-bold  ">Want to stand out? We’ll make it happen!</span>   
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Services;
