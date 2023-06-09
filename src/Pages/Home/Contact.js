import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import contact from "../../assets/contact.png";

const Contact = () => {
  const [disable, setDisable] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_od7i7i1",
        "template_s5mqyoq",
        form.current,
        "-SM6kA8l-iYTnGv9l"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDisable(true);
          toast.success(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="mt-14">
      <h1 className="text-3xl font-bold text-center bg-black bg-clip-text text-transparent">
        Contact US
      </h1>
      <hr className="w-2/4 mx-auto my-5" />
      <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
        <div className="flex flex-col justify-between">
          <img src={contact} alt="" className="pr-4 h-full" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 ng-untouched ng-pristine ng-valid mt-10"
        >
          <div data-aos="fade-up" data-aos-duration="1500">
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-gray-200 text-black"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <input
              id="email"
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-gray-200 text-black"
              data-temp-mail-org="1"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              className="w-full p-3 rounded-xl bg-gray-200 text-black"
              spellcheck="false"
              required
            ></textarea>
          </div>
          <button
            disabled={disable ? true : false}
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-indigo-500 to-blue-500 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
