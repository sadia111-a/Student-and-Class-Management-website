const Star = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src="https://i.ibb.co/0FL9LZ9/undraw-Educator-re-ju47.png"
        className="w-3/5 mx-auto rounded-xl"
      />
      <div
        className="absolute  rounded-xl flex  h-full  left-0 pl-4 items-center bottom-0 bg-gradient-to-r from-[#151515] to-[
rgba(21, 21, 21, 0.00)]"
      >
        <div className="text-white space-y-7 pl-12 w-1/2">
          <h2 className="lg:text-4xl font-bold">
            Start your free 30-day trial
          </h2>
          <p>
            Create, market and sell your online courses through SkillForge’s
            all-in-one learning platform and generative AI tools
          </p>
          <div className="">
            <button className="btn btn-primary mr-5">Start free trial</button>
            <button className="btn btn-outline btn-secondary">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
