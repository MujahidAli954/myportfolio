import React from "react";
import "./style.css";
function Resume() {
  return (
    <>
      <section id="about" className="container bg-slate-900 overflow-x-hidden ">
        <div className="mt-16">
          <span className="text-green-300 text-xl font-semibold">Who i am</span>
          <span className="line translate-x-2 -translate-y-1"></span>
        </div>
        <h3 className="text-white text-2xl mt-2 font-bold mx-3" >About Me</h3>
        <div class="text">
          <p className="text-white  mx-2 mt-4">
            Full Stack web developer with background knowledge of{" "}
            <em>MERN Stack with Redux</em>,along with a knack of building
            applications with utmost efficiency.
          </p>
          <p className="text-white  mx-2 mt-2">
            I develop websites with MongoDB,Expressjs,React and Node.js.I always
            work towards achieving best result on each project I lay my hands
            on.
          </p>
        </div>
        <div className="Button">
        <a href={require('../images/Resume.pdf')} download='Resume'>
          <button type='button' className="bg-green-300 px-10 hover:bg-blue-700 text-black font-bold py-3 mb-10 translate-y-6 rounded-full">
            Download CV
          </button>
          </a>
        </div>
        <div class="line-creater">
        <div className="mt-16">
          <span className="text-green-300 text-xl font-semibold">Check Out</span>
          <span className="line translate-x-2 -translate-y-1"></span>
        </div>
        <h3 className="text-white text-2xl mt-2 font-bold mx-3">My Skills</h3>
        </div>
      </section>
    </>
  );
}

export default Resume;
