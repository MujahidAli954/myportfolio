import React from "react";
import {} from "@heroicons/react/outline";
import {FaRegFolder} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi'

const cardsdata = [
  {
    img: "/client/public/images/image1.png",
    name: "E-Learning Portal",
    text: "Designed to allow Students to join Classes and take Courses what they want to learn",
  },
  {
    img: "/client/public/images/image2.jpeg",
    name: "News Web App",
    text: "Built with React and Consuming the News API to display latest news",
  },
  {
    img: "/client/public/images/image3.jpg",
    name: "Random Quote Generator",
    text: "Built with Vanilla Javascript to generate random quotes using random quotes generator API",
  },

];

function Cards() {
  return (
    <>
      <section id="myprojects" className="container overflow-x-hidden  bg-slate-900 ">
      <div>
      <div className="mt-16">
          <span className="text-green-300 text-xl font-semibold" id="myprojects">Take A Look At</span>
          <span className="line translate-x-2 -translate-y-1"></span>
        </div>
        <h3 className="text-white text-2xl mt-2 font-bold mx-3" >My Projects</h3>
        </div>
        {cardsdata.map((item) => {
          return (
            <>
              <div className="max-w-sm  mx-6 my-3 md:max-w-2xl md:mx-32 lg:mx-40 xl:mx-72 2xl:mx-96 rounded-lg overflow-hidden shadow-lg bg-slate-800  ">
                <div className="px-6 py-4">
                <div className="flex flex-row justify-between">
                <FaRegFolder className="" style={{color: 'palegreen' ,fontSize: '30px'}}/>
                <FiGithub className="" style={{color: 'palegreen' ,fontSize: '20px'}} />
                </div>
                  <div className="font-bold text-xl mb-2 text-white">{item.name}</div>
                  <p className=" text-base text-bold-700 text-white">{item.text}</p>
                </div>
                </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Cards;
