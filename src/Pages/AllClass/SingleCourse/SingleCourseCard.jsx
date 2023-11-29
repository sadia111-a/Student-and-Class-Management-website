import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useEnroll from "../../../hooks/useEnroll";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const SingleCourseCard = ({ course }) => {
  const { title, enrolment, price, image, description, _id, rating } =
    course || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useEnroll();
  const handleAddToCourse = () => {
    if (user && user.email) {
      //send course to the database
      const courseItem = {
        courseId: _id,
        email: user.email,
        title,
        image,
        price,
        description,
      };
      axiosSecure.post("/enroll", courseItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${title} added to your enrolment`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch to update enrolment
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the enroll",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
              <Link to="/payment">
                <button
                  onClick={handleAddToCourse}
                  className="btn text-orange-950 font-semibold hover:bg-amber-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
