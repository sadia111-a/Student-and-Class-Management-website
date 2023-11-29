import { Link } from "react-router-dom";
import useEnroll from "../../../hooks/useEnroll";

const Enroll = () => {
  const [enroll] = useEnroll();
  const totalPrice = enroll.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <h2 className="text-xl font-semibold">
          My total enrolment classes:{enroll.length}
        </h2>
        <h2 className="text-xl font-semibold">
          total enrolment classes price:${totalPrice}
        </h2>
        <div className="text-center">
          <Link to="/payment">
            <button className="font-semibold bg-yellow-200 hover:bg-slate-300 px-11 py-2 rounded-md">
              Pay
            </button>
          </Link>
        </div>
      </div>
      {/* enroll class card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        {enroll?.map((item) => (
          <div
            key={item._id}
            className="card lg:w-50 card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Course Title:{item.title}</h2>
              <p>Name:{item.email}</p>
              <p>Price:${item.price}</p>
              <div className="card-actions justify-center">
                <Link to={`enrollClass/${item._id}`}>
                  <button className="btn w-full border-0 text-black bg-yellow-100 hover:bg-yellow-200 btn-primary">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enroll;
