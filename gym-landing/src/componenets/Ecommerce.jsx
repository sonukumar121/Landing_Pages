import gym1 from "../assets/1.jpg";
import gym2 from "../assets/2.jpg";
import gym3 from "../assets/3.jpg";
import gym4 from "../assets/4.jpg";
import gym5 from "../assets/5.jpg";
import gym6 from "../assets/6.jpg";

const Ecommerce = () => {
  const products = [
    { id: 1, name: "Dumbbell Set",  img: gym1, desc: "Perfect for strength training at home." },
    { id: 2, name: "Treadmill",  img: gym2, desc: "Cardio machine for indoor running." },
    { id: 3, name: "Yoga Mat", img: gym3, desc: "Non-slip mat for yoga & stretching." },
    { id: 4, name: "Exercise Bike",  img: gym4, desc: "Low-impact cardio for all ages." },
    { id: 5, name: "Weight Plates",  img: gym5, desc: "Add extra weight to your workouts." },
    { id: 6, name: "Pull-Up Bar", img: gym6, desc: "Strengthen upper body with pull-ups." },
    { id: 7, name: "Resistance Bands", img: gym5, desc: "Great for full-body resistance training." },
    { id: 8, name: "Kettlebell", img: gym6, desc: "Versatile tool for strength & cardio." },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium text-center mb-12">
          Explore Our Gym Equipment
        </h1>

        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
