import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useEnroll from "../../hooks/useEnroll";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import EnrollDetailsPage from "./EnrollDetailsPage";

const EnrollDetails = () => {
  const [enroll] = useEnroll();
  const [course, setCourse] = useState({});
  const { _id } = useParams();
  console.log(course);

  const allCourse = useLoaderData();
  console.log(allCourse);
  useEffect(() => {
    const findCourse = enroll?.find((course) => course._id == _id);
    setCourse(findCourse);
  }, [_id, enroll]);

  return (
    <div>
      <SectionTitle
        heading={"Assignments"}
        subHeading={"online exam"}
      ></SectionTitle>
      <EnrollDetailsPage course={course}></EnrollDetailsPage>
    </div>
  );
};

export default EnrollDetails;
