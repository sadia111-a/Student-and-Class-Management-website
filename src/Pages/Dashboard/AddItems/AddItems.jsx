import { FaBook } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
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
      const courseRes = await axiosSecure.post("/course", courseItem);
      const classRes = await axiosSecure.post("/classes", courseItem);
      console.log(courseRes.data);
      if (classRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the course.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (courseRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} is added to the course.`,
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
        subHeading={"New class"}
        heading={"Add Class"}
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
            Add Class <FaBook className="ml-4"></FaBook>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
