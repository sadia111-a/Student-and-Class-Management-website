import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const CourseCard = ({ course }) => {
  const { title, enrolment, price, image, description, _id, rating } =
    course || {};
  return (
    <div>
      <div className="w-full h-[530px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className=" rounded-t-lg h-[280px]"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 mt-2">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              Enrolment:{enrolment}
            </span>
          </div>
          <div className="h-[96px]">
            <p>Details:{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/singleCourse/${_id}`}
              href="#"
              className="text-blue-800 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
