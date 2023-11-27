import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TeacherReq = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teachers");
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Teachers Request: {teachers.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Teacher Image</th>
              <th>Experience</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher._id}>
                <th>{index + 1}</th>
                <td>{teacher.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={teacher.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{teacher.experience}</td>
                <td>
                  {teacher.title}
                  {/* { user.role === 'admin' ? 'Admin' : <button
                                onClick={() => handleMakeAdmin(user)}
                                className="btn btn-lg bg-orange-500">
                                <FaUsers className="text-white 
                                text-2xl"></FaUsers>
                            </button>} */}
                </td>
                <td>{teacher.category}</td>
                <td>pending</td>
                <td>
                  <button
                    // onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm bg-yellow-100"
                  >
                    Approved
                    <FcApprove className="text-green" />
                  </button>
                  <button
                    // onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm bg-yellow-100"
                  >
                    Rejected
                    <FcDisapprove className="text-base" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherReq;
