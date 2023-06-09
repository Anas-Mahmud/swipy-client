import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import CustomerReview from "../../CustomerReview/CustomerReview";
import ServicesCard from "../../Services/ServicesCard";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact";
import FAQ from "../FAQ";
import Feature from "../Feature";
import Pricing from "../Pricing";
import Star from "../Star";
import Testimonial from "../Testimonial";

const Home = () => {
  useTitle("home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://swipy-server-anas-mahmud.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="my-16 text-center">
        <p className="text-xl font-bold text-emerald-700">WHAT WE DO</p>
        <h2 className="text-5xl font-bold text-slate-800">
          Services we can <br /> help you.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <Link to={"/services"}>
        <div className="flex justify-center">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-20 py-4 text-center mb-2"
          >
            See All
          </button>
        </div>
      </Link>
      <Feature />
      <About></About>
      <Testimonial />
      <Pricing />
      <FAQ />
      <Star />
      <CustomerReview></CustomerReview>
      <Contact />
    </div>
  );
};

export default Home;
