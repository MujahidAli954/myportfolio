import React from 'react';
import {FaHtml5,FaSass,FaNodeJs, FaBootstrap} from 'react-icons/fa';
import {DiCss3,DiReact,DiMongodb,DiGit} from 'react-icons/di';
import {SiJavascript, SiTailwindcss} from 'react-icons/si'

function Skills() {
  return <>
  <section className="container bg-slate-900 ">
 
       <ul>
              <div className="max-w-sm mx-1 grid grid-cols-2 sm:ml-32 md:max-w-2xl md:grid-cols-4 md:mx-32 lg:mx-40  md:px-8 md:py-8 lg:grid-cols-5  xl:max-w-7xl xl:px-10 xl:mx-24 xl:w-5/6 xl:gap-x-4 xl:gap-y-10 2xl:mx-32  rounded-lg overflow-hidden shadow-lg bg-slate-800 ">
                <li>
                <div className="bg-white  rounded-lg grid justify-items-center  mx-6  my-2  md:mx-4  md:my-2 xl:py-4"> 
                <FaHtml5  
                style={{color: '#d84924' ,fontSize: '40px'}}/>
                <p>HTML</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center  mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <DiCss3 style={{color:'#2449d8' , fontSize:'40px'}}/>
                <p>CSS</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center  mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <FaSass style={{color:'#c36192' , fontSize:'40px'}}/>
                <p>SASS</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <SiJavascript  className=" pt-1" style={{color:'#ead41c' , fontSize:'35px'}}/>
                <p className="mt-1">Javascript</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6 my-2 md:mx-4 md:my-2 xl:py-4">
                <DiReact style={{color:'#00c2f2' , fontSize:'40px'}}/>
                <p>React</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6 my-2 md:mx-4 md:my-2 xl:py-4">
                <FaNodeJs  className="pt-1" style={{color:'rgb(79,171,62)' , fontSize:'40px'}}/>
                <p>Nodejs</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <DiMongodb className="pt-1" style={{color:'rgb(79,171,62)' , fontSize:'40px'}}/>
                <p>Mongodb</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <DiGit style={{color:'rgb(232,78,49)' , fontSize:'40px'}}/>
                <p>Git</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6 my-2 md:mx-4 md:my-2 xl:py-4">
                <SiTailwindcss className="" style={{color:'hsl(198,93%,59%)' , fontSize:'40px'}}/>
                <p>Tailwindcss</p>
                </div>
                </li>
                <li>                  
                <div className="bg-white rounded-lg grid justify-items-center mx-6  my-2 md:mx-4 md:my-2 xl:py-4">
                <FaBootstrap  className="" style={{color:'blue' , fontSize:'40px'}}/>
                <p>Bootstrap</p>
                </div>
                </li>
              </div>
              </ul>
      </section>
  </>;
}

export default Skills;
