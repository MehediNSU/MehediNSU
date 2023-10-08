import React from "react";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.webp";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.webp";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bill Gates",
    review:
      "Always available, extremely knowledgeable, and a tremendous 'can-do' attitude. Our company was on a tight timeline and strict budget to create a first-class app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations... the entire company was thrilled with it! Without any hesitation... highly recommended.",
  },
  {
    avatar: AVTR2,
    name: "Mark Zuckerberg",
    review:
      "Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal. He is absolutely one of the best...if not THE best!",
  },
  {
    avatar: AVTR3,
    name: "Elon Mask",
    review:
      "It is a pleasure working with Mehedi. He is extremely knowledgeable, business savvy, and positive. His approach to challenges and opportunities is innovative. He is highly productive and consistently delivers as promised. And to top it all off, he is gracious, kind, and insightful.",
  },
  {
    avatar: AVTR4,
    name: "Jeff Bezos",
    review:
      "You have been absolutely wonderful for Amazon, and I can't thank you enough for all your tremendous skills, support and patience specially during our merger.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
