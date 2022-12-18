import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";

function Forms() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "", 
    message: "", 
  });
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState, [e.target.name]: e.target.value,
    }));
  }
  
  const submitEmail = async (e) => { 
    e.preventDefault();
    // console.log({ mailerState });
      await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        // console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") { 
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <div>
      <section id="contact" className="outer">
        <div className=""></div>
        <div className="bg-slate-900 py-2 px-2">
          <div className="mt-16 ">
            <span className="text-green-300 text-xl font-semibold" d="contact">
              Contact Me
            </span>
            <span className="line translate-x-2 -translate-y-1"></span>
          </div>
          <h3 className="text-white text-2xl mt-2 font-bold mx-3">
            Get In Touch
          </h3>
          <div className="grid md:grid-cols-2 2xl:grid-cols-2 ">
            <div className="px-6 2xl:ml-32 md:px-28 overflow-x-hidden py-10 grid grid-rows-3 grid-flow-col bg-slate-900">
              <div className="display-block w-12  h-12 mb-4 bg-white rounded-full">
                <GoLocation
                  className="translate-x-2 translate-y-2"
                  style={{ color: "magenta", fontSize: "30px" }}
                />
                <p className="ml-16 -translate-y-4 text-white">
                  islamabad,Pakistan
                </p>
              </div>
              <div className="display-block  justify-between  w-12  h-12 mb-4 bg-white rounded-full">
                <MdMessage
                  className="translate-x-2 translate-y-2"
                  style={{ color: "magenta", fontSize: "30px" }}
                />
                <p className="ml-16 -translate-y-4 text-white">
                  mujahidtech985@gmail.com
                </p>
              </div>
              <div className="display-block justify-center  w-12  h-12 mb-4 bg-white rounded-full">
                <BsFillTelephoneFill
                  className="translate-x-2 translate-y-2"
                  style={{ color: "magenta", fontSize: "30px" }}
                />
                <p className="ml-16 -translate-y-4 text-white">+923095080028</p>
              </div>
            </div>
            <div className="bg-slate-850">
              <form
                onSubmit={submitEmail}
                className="md:mx-16 md:py-4  lg:mx-8 xl:mx-44 2xl:m "
              >
                <div class="mb-6">
                  <label
                    for="username-success"
                    class="block mb-2 text-white text-sm font-medium  dark:text-green-500"
                  ></label>
                  <input
                    type="text"
                    id="username-success"
                    class="bg-transparent  border border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 lg:w-80 2xl:w-96 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                    onChange={handleStateChange}
                    name="name"
                    value={mailerState.name}
                  />
                </div>
                <label
                  for="email-adress-icon"
                  class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                ></label>
                <div class="relative mt-1">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-adress-icon"
                    class="bg-transparent  border border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 lg:w-80 2xl:w-96 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    onChange={handleStateChange}
                    name="email"
                    value={mailerState.email}
                  />
                </div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                ></label>
                <textarea
                  id="message"
                  rows="4"
                  class="block mt-6 p-2 w-full lg:w-80 lg:mr-32 2xl:w-96 text-sm text-white bg-transparent  rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                  onChange={handleStateChange}
                  name="message"
                  value={mailerState.message}
                ></textarea>
                <button
                  className="my-2 lg:mr-32 lg:mt-5 xl:-mr-8 2xl:mr-4 bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  type="submit"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forms;
