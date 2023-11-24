import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const FeedBack = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"Student Feedback"}
        subHeading={"Voices of Success and Growth"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <div className="card bg-base-100 h-[300px] shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <div className="flex items-center gap-3">
                  <figure className="w-[40px] rounded-full">
                    <img src={review.image} alt="review" />
                  </figure>
                  <p>{review.name}</p>
                </div>
                <p>{review.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
          <h3 className="text-3xl text-center text-white -mt-12 uppercase">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
          <h3 className="text-3xl text-center text-white -mt-12 uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
          <h3 className="text-3xl text-center text-white -mt-12 uppercase">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FeedBack;
