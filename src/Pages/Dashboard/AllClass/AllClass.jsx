import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCourse from "../../../hooks/useCourse";

const AllClass = () => {
  const [course, , refetch] = useCourse();
  const axiosSecure = useAxiosSecure();

  const handleApproveItem = async (item) => {
    try {
      const url = `/course/approve/${item._id}`;
      console.log("Request URL:", url);
      const res = await axiosSecure.patch(url);

      if (res.data.course) {
        // Update the course in your local state or refetch
        // assuming you have a state or refetch function
        // example: refetch();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.title} has been approved`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to approve course",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to approve course",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeleteItem = (item) => {
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
        const res = await axiosSecure.delete(`/course/${item._id}`);
        // console.log(res.data);
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
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl text-center font-serif font-semibold mb-4">
        All Classes:{course.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                <th>See Progress</th>
              </tr>
            </thead>
            <tbody>
              {course.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-[30px]">{item.title}</td>
                  <td>{item.rating}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleApproveItem(item)}
                      className="btn btn-ghost btn-sm bg-yellow-100"
                    >
                      Approved
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-sm"
                    >
                      Reject
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-sm">Progress</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
