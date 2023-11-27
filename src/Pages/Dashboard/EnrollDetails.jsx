import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useEnroll from "../../hooks/useEnroll";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const EnrollDetails = () => {
  const [enroll] = useEnroll();
  const [course, setCourse] = useState({});
  const { _id } = useParams();
  console.log(course);

  const allCourse = useLoaderData();
  console.log(allCourse);
  useEffect(() => {
    const findCourse = allCourse?.find((course) => course._id == _id);
    setCourse(findCourse);
  }, [_id, allCourse]);

  return (
    <div>
      <SectionTitle
        heading={"Assignments"}
        subHeading={"online exam"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Description</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {enroll.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>12-12-23</td>
                <td className="w-96">{item.description}</td>
                <td>
                  <button className="btn btn-ghost">Submit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollDetails;
