'use client'
import Head from 'next/head'
import Image from 'next/image'
import manu from '../public/manu.jpg';
import laptop from '../public/laptop.jpg'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BiLogoReact, BiLogoBootstrap, BiLogoDjango, BiLogoNetlify, BiLogoVuejs, BiLogoJavascript} from 'react-icons/bi'
import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);


  return (
   <div className={darkMode ? "dark" : ''}>
      <main className='px-10 bg-slate-100  dark:bg-black'>
        <section className='min-h-screen  w-full ' >
          <nav className='flex justify-between py-10 sm:py-5  mb-12 '>
            <h1 className='text-md text-blue-700  dark:text-teal-600 font-sans  cursor-pointer '>developedbyWangila</h1>
            <ul className='flex items-end'>.
              <li className='text-2xl cursor-pointer dark:text-white' ><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} /> </li>
              <li className='bg-gradient-to-r from bg-blue-500  dark:bg-teal-600 rounded-md border-none px-4 ml-8 text-white'><a href=''>Home</a></li>
            </ul>
          </nav>

          <div className="p-8 text-center">
            <h2 className='py-2 text-5xl font-sans text-blue-600 dark:text-teal-600 '>Emmanuel Wangila </h2>
            <h3 className='py-2 text-2xl font-burtons dark:text-teal-600 text-blue-500'>Front-End Developer and Designer</h3>
            <p className=' font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> In the realm of front-end development, I'm is proficient in utilizing popular JavaScript frameworks 
            such as React and Vue. My mastery of these libraries allows
             me to craft elegant and responsive user interfaces that not only look stunning
             but also deliver exceptional user experiences.
              Whether it's building dynamic web applications or designing engaging user interfaces,
               I would love to think that my front-end skills are second to none.
            </p>
          </div>

          <div className=' flex cursor-pointer justify-center gap-16 py-3 text-gray-600'>

             <a href={'https://twitter.com/Emmanuelwangi17'}> <AiFillTwitterCircle className='text-5xl'/> </a> 
             <a href={'https://www.linkedin.com/in/emmanuel-wangila/'}> <AiFillLinkedin className='text-5xl'/> </a> 
             <a href={'https://github.com/emmanuelwangila'}> <AiFillGithub className='text-5xl'/> </a> 
             
          </div>

          <div className='relative  mt-20 lg:mx-auto sm:mx-3  flex gap-10    bg-gradient-to-b from-teal-500 w-80 h-80 overflow-hidden rounded-full     '>
            <Image layout='fill' objectFit='cover'  src={manu} />
          </div>


        </section>

       
        <section>
          <div className='   bg-white  dark:bg-black rounded-md  mt-4 mb-5 '>
            <h3 className='text-3xl py-5 font-sans flex justify-center dark:text-teal-500  text-blue-500 '>Services I offer</h3>
            <p className=' font-medium text-gray-600 dark:text-white m-4  py-5 leading-8 flex flex-row gap-6  justify-center'> I'm a software developer doing great designs and website's,
              Web Application Development: Create web applications using React and Vue to deliver responsive, dynamic, and interactive user interfaces.

              User Interface (UI) Design: Design visually appealing and user-friendly interfaces that enhance the overall user experience.

              Single Page Applications (SPAs): Build SPAs that load once and dynamically update content without requiring full-page refreshes, providing a smoother user experience.
            </p>

            <p className=' font-medium text-gray-600 m-4  dark:text-white  py-5 leading-8 flex justify-center'> I'm a software developer doing great designs and website's,
              API Development: Design and build RESTful or GraphQL APIs to enable communication between the front-end and back-end.

              Database Management: Set up, configure, and manage databases (e.g., PostgreSQL, MySQL) to store and retrieve data efficiently.

              Authentication and Authorization: Implement user authentication and authorization systems to secure the application's resources
            </p>
          </div>

          <div>
            <div className=' bg-white  dark:bg-black  rounded-md border-teal-600  py-10 mb-10 '>
              <h3 className='text-blue-500 dark:text-teal-600 py-5 font-sans mx-4 flex  text-3xl justify-center '>Stack</h3>
              <p className=' font-medium m-4  text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> 
              React, Vue, and Django are three powerful tools in the web development toolkit.
               React, a JavaScript library, excels in creating dynamic and reusable user interfaces 
               with its virtual DOM and component-based architecture. Vue, another JavaScript framework, 
               offers flexibility and simplicity for building modern web applications with its reactivity
                system and component-driven approach. On the back-end, Django, a Python web framework,
                 provides a robust, secure, and highly modular platform for building web applications,
                  complete with an ORM, authentication, and an admin interface. 
                  Together, these technologies empower developers to create efficient,
                   interactive, and feature-rich web applications, covering both front-end 
                   and back-end aspects of development, and allowing for a wide range of 
                   web development projects to be undertaken with confidence.
            </p>
              <div className='text-5xl font-bold flex px-8 mx-auto justify-center  gap-16 dark:text-teal-600 text-blue-500 py-10 '>
              <BiLogoReact className=' '/>
              <BiLogoBootstrap/>
              <BiLogoDjango/>
              <BiLogoNetlify/>
              <BiLogoJavascript/>
              <BiLogoVuejs/>

              </div>
            </div>
          </div>
        </section>
        <section >

          <div>
          <h1 className='text-3xl mx-3 py-3  text-blue-500  font-sans  dark:text-teal-600'>Experience </h1>
          

          <div className='grid grid-cols-2 bg-white dark:bg-black sm:w-fit sm:gap-4  md:flex-wrap py-10 mb-5 rounded-md shadow-lg'>
            
            <p className=' grid-flow-col m-3  font-medium text-gray-600 dark:text-white  py-5 leading-8 '> 
            Component-Based Architecture: I'm proficient in creating reusable UI components, which is a core concept in React.
            State Management: You've likely used state and props to manage data and UI updates efficiently.
              Routing: I'm familiar with client-side routing using libraries like React Router.
              API Integration: You've connected your React components to backend APIs using methods like Axios or the Fetch API.
                Styling: You've implemented CSS styles using various methods, including CSS-in-JS libraries like styled-components or CSS preprocessors like SASS
            </p>

            <p className='grid-flow-col m-3  font-medium text-gray-600 dark:text-white  leading-8 '> 
              Model-View-Controller (MVC): I have great understanding of  Django's MVC architecture and how to create models, views, and controllers (views and serializers in Django REST framework).
              Authentication and Authorization: Experience in  implementing user authentication and authorization, perhaps using Django's built-in authentication system or third-party libraries like Django Rest Framework JWT.
              Database Integration: You're experienced in working with databases, especially with Django's ORM to define and query database schemas.
            API Development: I've skills in building  RESTful APIs using Django REST framework or GraphQL APIs using Graphene-Django
            </p>

          

            

          </div>

          </div>
          
        </section>
        <section>
          <h3 className='text-blue-500 font-sans mx-3 py-3 text-3xl dark:text-teal-600 '>Contact Me</h3>
          <div className='flex justify-center mt-5 mb-5 rounded-md '>
              <form method='POST' className='flex flex-col justify-center  dark:bg-black bg-white rounded-md w-full h-full mt-4 py-4 '>
                <input className="p-4 m-2 rounded-md  bg-gray-100  w-[50%] border border-blue-300" id='name' placeholder="enetr your name"></input>
                <input className="name p-4 m-2  w-[50%] bg-gray-100 rounded-md border border-blue-300 " id='phone' placeholder="enetr your phoneNumber"></input>
                <input className="name p-4 m-2 w-[50%] border border-blue-300 bg-gray-100 rounded-md"  id='location' placeholder="enter your location"></input>
                <textarea className='p-6 m-2 w-[50%] bg-gray-200 border border-blue-300 rounded-md  ' placeholder='input your message here '>

                </textarea>
                <button className='p-4 m-2 dark:bg-teal-600 bg-blue-500 text-white flex justify-center w-[50%] rounded-md '>Submit</button>
                
              </form>
              
                    
          
          

          </div>
          
        </section>
        <section>
          <div className='border border-b border-blue-300 text-teal-600 sm:flex-wrap font-sans flex justify-between m-4 p-4 rounded-md'>
            <h3>Developedby Emmanuel Wangila</h3>
            <h4>phone: 0798719417</h4>
            <h4>@2023 All Rights Reserved</h4>

          </div>
        </section>


      </main>
   </div>
  )
}
