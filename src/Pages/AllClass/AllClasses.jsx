import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CourseCard from "./CourseCard";
import { useLoaderData } from "react-router-dom";

const AllClasses = () => {
  const { count } = useLoaderData();
  console.log(count);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPerPage = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPerPage).keys()];

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/course?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <Helmet>
        <title>SkillForge | All Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
        {courses?.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
      {/* pagination */}
      <div className="text-center mb-4 mt-5">
        <p>Current page:{currentPage}</p>
        <button onClick={handlePrevPage} className="bg-slate-100 mr-3 btn">
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "join-item btn mr-2 bg-yellow-100"
                : "join-item btn mr-2"
            }
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="bg-slate-100 mr-3 btn">
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllClasses;
