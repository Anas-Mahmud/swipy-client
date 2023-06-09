import React from "react";

const FAQ = () => {
  return (
    <section className="text-start w-9/12 mx-auto">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-lg">
          Here are answers to some frequently asked questions about our digital
          services:
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6  focus:outline-none text-lg font-semibold">
              How do I get started with your services?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Simply reach out to us through our contact form or give us a call.
              We will schedule an initial consultation to discuss your project
              requirements, goals, and timelines. From there, we'll provide you
              with a customized proposal and a road map for getting started.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg font-semibold">
              Do you offer customized solutions tailored to my specific needs?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Absolutely! We understand that every business is unique. We take a
              customized approach to each project, carefully assessing your
              requirements and tailoring our solutions to meet your specific
              needs and objectives.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg font-semibold">
              Do you offer ongoing maintenance and support after the project is
              completed? erat?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Yes, we offer ongoing maintenance and support services to ensure
              the smooth functioning of your digital assets. We provide support
              packages that include regular updates, bug fixes, security
              enhancements, and technical assistance as needed.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg font-semibold">
              How do you ensure the security and confidentiality of my project?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              We prioritize the security and confidentiality of your project. We
              have strict protocols in place to protect your data and ensure
              confidentiality. We are happy to sign any necessary non-disclosure
              agreements (NDAs) to provide you with peace of mind.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none text-lg font-semibold">
              Can you provide examples of your previous work or client
              testimonials?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              Yes, we have a portfolio showcasing our previous work and client
              testimonials. You can browse through our portfolio section on our
              website to see the projects we have completed and read
              testimonials from our satisfied clients.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
