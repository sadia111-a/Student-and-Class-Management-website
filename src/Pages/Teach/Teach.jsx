import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Teach = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <Helmet>
        <title>SkillForge | Teach</title>
      </Helmet>
      <div>
        <SectionTitle
          heading="Teach on SkillForge"
          subHeading="apply for a teaching"
        ></SectionTitle>
        <div>
          <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  my-6">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex gap-6">
              {/* experience */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Experience*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("experience", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select an experience option
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="experienced">Experienced</option>
                  <option value="some idea">Some idea</option>
                </select>
              </div>

              {/* title */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Title*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  {...register("title", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-6">
              {/* category */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="web development">Web Development</option>
                  <option value="digital marketing">Digital Marketing</option>
                  <option value="User Experience (UX) Design">
                    User Experience (UX) Design
                  </option>
                  <option value="Data Science and Analytics">
                    Data Science and Analytics
                  </option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                </select>
              </div>
              {/* user image */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">User Image*</span>
                </label>
                <input
                  type="text"
                  placeholder="image"
                  defaultValue={user?.photoURL}
                  {...register("image", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="text-center mb-5">
              <button className="btn bg-slate-700 text-white">
                Submit for review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Teach;
