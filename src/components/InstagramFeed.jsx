import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const ACCESS_TOKEN = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your token
  const USER_ID = "YOUR_INSTAGRAM_USER_ID"; // Replace with your Instagram user ID
  const POST_COUNT = 10; // Number of posts to fetch

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${ACCESS_TOKEN}&limit=${POST_COUNT}`
        );
        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center py-6">
      <h2 className="text-2xl font-bold mb-4">Instagram Feed</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="p-2">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
                alt="Instagram post"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramFeed;
