import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCourseCard from "./SingleCourseCard";

const SingleCourse = () => {
  const [course, setCourse] = useState({});
  const { _id } = useParams();

  const allCourse = useLoaderData();
  // console.log(allProduct);
  // console.log(_id);

  useEffect(() => {
    const findCourse = allCourse?.find((course) => course._id == _id);
    setCourse(findCourse);
  }, [_id, allCourse]);
  // console.log(brand);
  return (
    <div>
      <Helmet>
        <title>SkillForge || Course Details</title>
      </Helmet>
      <SingleCourseCard course={course}></SingleCourseCard>
    </div>
  );
};

export default SingleCourse;
