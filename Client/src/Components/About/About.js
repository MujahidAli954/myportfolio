import React from "react";
import Typical from "react-typical";



function About() {
  return (
    <>
      <section id="home" className="container outer flex-1 pt-32 overflow-x-hidden overflow-y-hidden  bg-gray-900 ">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-2 ">
      <div className=" 2xl:mt-28 sm-flex-1">
        <p className="text-white font-sans " >HI THERE 👋 I'M</p>
        <h1 className="text-white  translate-y-2 scale-125 font-semibold text-4xl">
          Mujahid Ali
        </h1>
        <div className="profile-details-role translate-y-8 w-full">
          <span className="">
            {" "}
            <h1 className="text-green-300 text-xl mb-6 font-semibold mx-3 ">
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 👨‍💻",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                  "MERN Stack Developer 😎",
                  1000,
                  "Javascript Dev🧑‍💻",
                  1000,
                  "React/Redux Dev👨‍🎓",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline  text-white text-left">
            A Full Stack Web Developer passionate about creating interactive applications and experiences on the web.knack of bulding applications with frontend & back end operations
            </span>
          </span>
          
        </div>
        <button className="bg-green-300 2xl:mx-48 px-10  hover:bg-blue-700 text-black font-bold py-3 translate-y-12 mb-20 rounded-full">
          Hire Me
        </button>
        </div>
        <div className="md:mx-32 lg:mt-8 2xl:mt-12">
              <img className="" src={require('../images/removedev.png')} alt="" style={{color:'black'}}/>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
