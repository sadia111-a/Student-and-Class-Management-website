import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClass = () => {
  const [classes, refetch] = useClasses();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/classes/${item._id}`);
          console.log("Delete response:", res.data);

          if (res.data.deletedCount > 0) {
            // refetch to update the ui
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.title} has been deleted`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete the class.",
            });
          }
        } catch (error) {
          console.error("Error deleting class:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred while deleting the class.",
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-center font-sans font-semibold">
        My Added classes:{classes.length}
      </h2>
      {/* enroll class card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        {classes?.map((item) => (
          <div
            key={item._id}
            className="card lg:w-50 card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Course Title:{item.title}</h2>
              <div className="flex">
                <p>Name:{item.name}</p>
                <p>Email:{item.email}</p>
              </div>
              <p>Price:${item.price}</p>
              <p>Description:{item.description}</p>
              <div className="card-actions justify-evenly flex">
                <Link to={`/dashboard/updateClass/${item._id}`}>
                  <button className="btn w-full border-0 text-black bg-yellow-100 hover:bg-yellow-200 btn-primary">
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDeleteItem(item)}
                  className="btn border-0 text-black bg-yellow-100 hover:bg-yellow-200 btn-primary"
                >
                  Delete
                </button>

                <Link to="">
                  <button className="btn w-full border-0 text-black bg-yellow-100 hover:bg-yellow-200 btn-primary">
                    See Details
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

export default MyClass;
