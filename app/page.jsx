'use client'
import Head from 'next/head'
import Image from 'next/image'
import manu from '../public/manu.jpg';
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
            <h1 className='text-md text-blue-700  font-sans  cursor-pointer '>developedbyWangila</h1>
            <ul className='flex items-end'>.
              <li className='text-2xl cursor-pointer dark:text-white' ><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} /> </li>
              <li className='bg-gradient-to-r from bg-blue-500 rounded-md border-none px-4 ml-8 text-white'><a href=''>Resume</a></li>
            </ul>
          </nav>

          <div className="p-8 text-center">
            <h2 className='py-2 text-5xl font-sans text-blue-600 dark:text-white '>Emmanuel Wangila </h2>
            <h3 className='py-2 text-2xl font-burtons text-teal-500'>Front-End Developer and Designer</h3>
            <p className=' font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> I'm a software developer doing great designs and website's,
              with the best UI/UX , <br/>I have good experience with JavaScript frameworks,
              Vue and React. ALso Back-end web Application with Dj'ango framework.
            </p>
          </div>

          <div className='text-5xl flex cursor-pointer justify-center gap-16 py-3 text-gray-600'>
             <a href={'https//github.com/emmanuelwangila'}> <AiFillTwitterCircle/> </a> 
             <a href={'https//github.com/emmanuelwangila'}> <AiFillTwitterCircle/> </a> 
             <a href={'https//github.com/emmanuelwangila'}> <AiFillTwitterCircle/> </a> 
          </div>

          <div className='relative mt-20 mx-auto flex bg-gradient-to-b from-teal-500  w-80 h-80 overflow-hidden  '>
            <Image layout='fill' objectFit='cover'  src={manu} />
          </div>


        </section>

       
        <section>
          <div className='border-2 rounded-md  mt-4 mb-5 '>
            <h3 className='text-5xl py-10 mb-5 font-sans flex justify-center text-blue-500 '>Services I offer</h3>
            <p className=' font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> I'm a software developer doing great designs and website's,
              with the best UI/UX , <br/>I have good experience with JavaScript frameworks,
              Vue and React. ALso Back-end web Application with Dj'ango framework.
            </p>

            <p className=' font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> I'm a software developer doing great designs and website's,
              with the best UI/UX , <br/>I have good experience with JavaScript frameworks,
              Vue and React. ALso Back-end web Application with Dj'ango framework.
            </p>
          </div>

          <div>
            <div className='shadow-lg border-2 rounded-md border-teal-600  py-10 mb-10 '>
              <h3 className='text-blue-500  py-5 font-sans mx-4 flex  text-5xl justify-center '>Technologies I use</h3>
              <p className=' font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center'> 
              I'm a software developer doing great designs and website's,
              with the best UI/UX , <br/>I have good experience with JavaScript frameworks,
              Vue and React. ALso Back-end web Application with Dj'ango framework.
            </p>
              <div className='text-5xl font-bold flex px-8 mx-auto justify-center  gap-16 text-blue-500 py-10 '>
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
        <section>
          <div className='flex justify -center py-10 mb-5 rounded-md shadow-lg'>
            <h3 className='text-teal-600 ml-4 '>Project's I have Done</h3>
            <div className='flex justify-center m-4 p-5 '>
              Meta Verse Web-Page Application

            </div>

          </div>
        </section>


      </main>
   </div>
  )
}
