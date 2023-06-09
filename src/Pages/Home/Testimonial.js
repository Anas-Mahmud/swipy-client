import React from "react";

const Testimonial = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="mx-36 px-6 py-12 ">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <p className="text-lg font-semibold text-purple-600">
              Client Testimonials
            </p>
            <h2 className="text-4xl font-bold">
              Feedback from Happy Customers
            </h2>
            <p className="text-gray-500 text-sm">
              Discover what our clients have to say about their experience
              working with us. At Swipy, we take pride in delivering exceptional
              digital services and ensuring client satisfaction. Don't just take
              our word for it—read the testimonials below to hear directly from
              our valued clients. These testimonials highlight the quality of
              our work, our commitment to meeting client goals, and the positive
              impact our services have had on their businesses. Their success
              stories are a testament to the dedication and expertise of our
              team.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    "Working with Swipy Digital Services was an absolute
                    pleasure. Their team of experts took our vision and
                    transformed it into a stunning website that exceeded our
                    expectations. Their attention to detail, professionalism,
                    and prompt communication made the entire process seamless.
                    We highly recommend their services!"
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm text-gray-500">
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    "I cannot speak highly enough of Swipy Digital Services.
                    They truly understand the digital landscape and provided us
                    with a comprehensive digital marketing strategy that
                    resulted in increased website traffic and conversions. Their
                    expertise and dedication to our success have been
                    invaluable. We look forward to continuing our partnership
                    with them."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm text-gray-500">
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    "We approached Swipy Digital Services for our mobile app
                    development project, and they delivered exceptional results.
                    From concept to execution, their team displayed creativity,
                    technical proficiency, and a deep understanding of user
                    experience. The app they developed has received rave reviews
                    from our users. We couldn't be happier with their services."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm text-gray-500">
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>
                    "Swipy Digital Services helped us revamp our branding and
                    design a visually stunning website. Their designers have an
                    incredible eye for detail and created a user-friendly
                    interface that perfectly represents our brand. The website
                    has received positive feedback from our clients, and we have
                    seen a significant increase in leads. We highly recommend
                    GHI Digital Services for their expertise and exceptional
                    customer service."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Leroy Jenkins</p>
                      <p className="text-sm text-gray-500">
                        CTO of Company Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
