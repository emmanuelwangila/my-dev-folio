import Head from 'next/head'
import Image from 'next/image'
import manu from '../public/manu.jpg';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function Home() {
  return (
   <div>
      <main className='px-10 bg-white '>
        <section className='min-h-screen  w-full ' >
          <nav className='flex justify-between py-10 sm:py-5  mb-12 '>
            <h1 className='text-md text-blue-700  font-sans  cursor-pointer '>developedbyWangila</h1>
            <ul className='flex items-end'>
              <li className='text-2xl cursor-pointer' ><BsFillMoonStarsFill/> </li>
              <li className='bg-gradient-to-r from bg-blue-500 rounded-md border-none px-4 ml-8 text-white'><a href=''>Resume</a></li>
            </ul>
          </nav>

          <div className="p-8 text-center">
            <h2 className='py-2 text-5xl font-sans text-blue-600'>Emmanuel Wangila </h2>
            <h3 className='py-2 text-2xl font-burtons text-teal-500'>Front-End Developer and Designer</h3>
            <p className=' font-medium text-gray-600  py-5 leading-8 flex justify-center'> I'm a software developer doing great designs and website's,
              with the best UI/UX , <br/>I have good experience with JavaScript frameworks,
              Vue and React. ALso Back-end web Application with Dj'ango framework.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>

          <div className='relative mt-20 mx-auto flex bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  '>
            <Image className=' rounded-md   '  src={manu} />
          </div>


        </section>
      </main>
   </div>
  )
}
