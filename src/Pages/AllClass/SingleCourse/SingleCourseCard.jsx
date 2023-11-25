import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleCourseCard = ({ course }) => {
  const { title, enrolment, price, image, description, _id, rating } =
    course || {};
  return (
    <div className="mb-4">
      <div className="lg:w-1/2 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="mx-auto h-[200px] rounded-t-lg"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Course Name: {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Ratings
            </span>
          </div>
          <div>
            <div>
              <div className="card-actions flex items-center">
                <span className="font-semibold text-orange-900">
                  {/* Donator: {donator_name} */}
                </span>
              </div>
              <p>
                <span className=" flex items-center">
                  <span className="font-bold">Total Enrolment:</span>

                  {enrolment}
                </span>
              </p>
            </div>
            <p>
              <span className="font-bold">description:</span> {description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Price: ${price}
            </span>

            <div className="">
              <button className="btn text-orange-950 font-semibold hover:bg-amber-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
