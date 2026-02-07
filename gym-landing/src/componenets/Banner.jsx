import dumbell from "../assets/dumbell.jpg";

const Banner = () => {
  return (
    <section
      className="text-gray-400 body-font bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${dumbell})` }}
    >
      {/* Overlay + Flex Container */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center h-full bg-black/50">
        
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
            Transform Your Body <br />
            Achieve Your Fitness Goals
          </h1>

          <p className="mb-8 leading-relaxed text-white text-lg">
            Join our gym today and get personalized training, expert guidance,
            and a supportive community.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row">
            <button className="text-white bg-indigo-500 py-3 px-8 hover:bg-indigo-600 rounded-lg text-lg mb-4 sm:mb-0 sm:mr-4">
              Enroll
            </button>

            <a
              href="tel:1234567890"
              className="text-gray-400 bg-gray-800 py-3 px-8 hover:bg-gray-700 hover:text-white rounded-lg text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
