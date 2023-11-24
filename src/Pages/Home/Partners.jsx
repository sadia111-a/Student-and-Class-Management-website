import img1 from "../../assets/amazon.png";
import img2 from "../../assets/spotify.png";
import img3 from "../../assets/telerama.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Partners = () => {
  return (
    <div>
      <SectionTitle
        heading={"Our Partners"}
        subHeading={"Collaborators Behind Our Success"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 justify-around items-center">
        <div className="mb-8 mx-4 h-[210px]">
          <img
            src={img1}
            alt="Sponsor 1 Logo"
            className="max-w-full h-auto mx-auto max-h-16"
          />
          <p className="text-gray-700 mt-4">
            We are proud to be sponsored by amazon, a leading company in
            industry. Their support enables us to continue providing
            high-quality education and learning experiences to our community.
          </p>
        </div>
        <div className="mb-8 mx-4 h-[210px]">
          <img
            src={img2}
            alt="Sponsor 1 Logo"
            className="max-w-full h-auto mx-auto max-h-16"
          />
          <p className="text-gray-700 mt-4">
            A big shoutout to our partner, Spotify, for their valuable support.
            Their collaboration enhances our mission to bring quality education
            and diverse learning experiences to our community. Together, we
            harmonize education and innovation for a brighter future.
          </p>
        </div>
        <div className="mb-8 mx-4 h-[210px]">
          <img
            src={img3}
            alt="Sponsor 1 Logo"
            className="max-w-full mx-auto h-auto max-h-16"
          />
          <p className="text-gray-700 mt-4">
            A special thank you to Sponsor telerama for their commitment to
            fostering education and innovation. Together, we are shaping the
            future by empowering learners with valuable skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
