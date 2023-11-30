import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://student-learn-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"Our Courses"}
        subHeading={"Unlock Knowledge and Explore Learning Paths"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {courses?.map((course) => (
          <SwiperSlide key={course._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <img className="w-3/5 h-3/5" src={course.image} alt="" />
              <p className="font-semibold text-lg mt-3">
                Course Name : {course.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Courses;
