import React from "react";
import { Link } from "react-router-dom";
import service3 from "../../../assets/about/service3.png";
import service5 from "../../../assets/about/service5.png";

const About = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 mx-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="relative lg:w-1/2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={service3}
              alt=""
              className="w-4/5 border-4 rounded-lg sm:h-80 lg:h-full xl:h-112 2xl:h-128"
            />
            <img
              src={service5}
              alt=""
              className="absolute w-3/5 right-6 top-1/2 border-4 rounded-lg sm:h-80 lg:h-full xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-1/2 lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-lg font-semibold text-purple-600 ml-3">
              About us
            </p>
            <h1 className="lg:text-5xl font-bold leading-none sm:text-6xl">
              Creative agency that
              <span className="dark:text-violet-400"> help you </span>go ahead.
            </h1>
            <p className="mt-6 mb-8 lg:text-lg sm:mb-12">
              Darkness they’re, moved whales great or void great man one man
              from blessed so our. Dominion good face was sixth male kind offer
              together beginning saw fifth midst they’re spirit which gathered.
              Appear saying blessed working experience.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get More Info
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
