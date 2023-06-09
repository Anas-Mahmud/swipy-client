import React from "react";

const CustomerReview = () => {
  return (
    <section className="my-14">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What customers are saying about this site
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              Awesome experience working with the team at Swipy! They are always
              very responsive and continuously gives us suggestions to improve
              our online presence in the F&B industry. A great help as they
              managed our SEO and SEM really well and we do not have to worry.
              Definitely will recommend them!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>!Elon Musk</p>
        </div>
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              Swipy digital is the best digital marketing agency in Singapore in
              my opinion. Increased traffic and quality leads by more than 350%
              in the period of 6 months. Absolutely pleased with Shane, Vance
              and team for SEM, SEO, FB marketing. Better ROI than traditional
              marketing platforms.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
          <p>!Mark Zuckerberg</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
