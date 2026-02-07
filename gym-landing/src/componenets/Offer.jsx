import cardio from "../assets/cardio.png";
import running from "../assets/running.png";
import weight from "../assets/weight.png";
import fire from "../assets/fire.png";

const Offer = () => {
  const offers = [
    { img: weight, title: "Weights", desc: "Weightlifting builds strength and muscle." },
    { img: cardio, title: "Crossfit", desc: "High intensity strength training." },
    { img: running, title: "Cardio", desc: "Improves heart health and stamina." },
    { img: fire, title: "Steam", desc: "Relaxation and recovery." },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-center mb-12">
          WHAT WE OFFER
        </h1>

        <div className="flex flex-wrap -m-4">
          {offers.map((item, i) => (
            <div key={i} className="w-full sm:w-1/2 xl:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                
                {/* Image */}
                <img
                  className="h-48 mx-auto mb-6 object-contain hover:scale-105 transition-transform duration-300"
                  src={item.img}
                  alt={item.title}
                />
                
                {/* Title & Desc */}
                <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                <p className="text-gray-600 mt-auto">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
