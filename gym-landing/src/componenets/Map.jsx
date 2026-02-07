// Map.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Map = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x2uhujm",   // Replace with your Service ID
        "template_8ix6rtg",  // Replace with your Template ID
        form.current,
        "lFGhGae8rH2IlcZ8f"    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Google Map */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Bhagalpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Near Ghanta Ghar, Bhagalpur, Bihar, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">yourgym@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Fill the form and we'll get back to you as soon as possible.
          </p>

          <label className="leading-7 text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mb-4 leading-8 transition-colors duration-200 ease-in-out"
            required
          />

          <label className="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mb-4 leading-8 transition-colors duration-200 ease-in-out"
            required
          />

          <label className="leading-7 text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 mb-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
          />

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Send Message
          </button>

          {status && <p className="text-green-500 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Map;
