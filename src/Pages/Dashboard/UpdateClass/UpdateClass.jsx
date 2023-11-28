import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateClass = () => {
  const { title, price, description, image, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // now send the course  data to the server with the image url
      const courseItem = {
        name: data.name,
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
        email: data.email,
      };
      //
      const courseRes = await axiosSecure.patch(`/course/${_id}`, courseItem);
      const classRes = await axiosSecure.patch(`/classes/${_id}`, courseItem);
      console.log(courseRes.data);
      if (classRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is updated to the course.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (courseRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is updated to the course.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"update class"}
        subHeading={"Refresh class"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* course name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Course Name*</span>
              </label>
              <input
                type="text"
                defaultValue={title}
                placeholder="Course Name"
                {...register("title", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            {/* teacher name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Teacher Name*</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-6">
            {/* user email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Teacher Email*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* course details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Description</span>
            </label>
            <textarea
              {...register("description")}
              defaultValue={description}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Update Class <FaBook className="ml-4"></FaBook>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
