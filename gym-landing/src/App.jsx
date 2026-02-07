import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Banner from "./componenets/Banner";
import Offer from "./componenets/Offer";
import Ecommerce from "./componenets/Ecommerce";
import Map from "./componenets/Map";
import Price from "./componenets/Price";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Offer />
      <Ecommerce />
      <Price />
      <Map />
      <Footer />

      {/* WhatsApp Floating Button */}
     {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20joining%20your%20gym.%20Please%20share%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-green-500 hover:bg-green-600 z-50"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-10 h-10"
  />
</a>
    </>
  );
};

export default App;
