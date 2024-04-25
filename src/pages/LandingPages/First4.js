import React from 'react'
import bgart from '../images/Designer.png'
import artist from '../images/artist.png'
import { Link } from 'react-router-dom'

const First4 = () => {
  return (
    <div>
    <div className='p-8 md:p-32 space-y-8 space-x-4 relative'>
  <img src={bgart} alt='' className='absolute inset-0 w-full h-full object-cover z-0' />
  <div className='relative z-10 backdrop-blur-md space-y-10 bg-white/30 rounded-2xl p-10'>
    <h1>Welcome to Art Vistas</h1>
    <p >Unlock a world of global art opportunities and connect with visionary artists from around the world. Explore, showcase, and collaborate on the international art stage.</p>
    <div className='space-x-4'>
      <Link to='/login' className='primary-button'>Join</Link>
      <Link to='/register' className='secondary-button'>Learn More</Link>
    </div>
  </div>
</div>





<div className='  bg-gradient-to-b from-stone-500 to-cyan-400 p-20 '>
  <h1>Connect with Diverse Opportunities</h1>
  <div className='flex lg:flex-row flex-col items-center p-20'>
    <div className='w-[400px] m-4'>
      <h2>International Stages</h2>
      <p>Discover a curated selection of art exhibitions, residencies, and festivals happening across the globe. Expand your reach and find new audiences for your work.</p>
    </div>
    <div className='w-[400px] m-4'>
      <h2>Collaborative Projects</h2>
      <p>Connect with artists from around the world to co-create inspiring works. Leverage diverse perspectives and cultural backgrounds to push the boundaries of your creative practice.</p>
    </div>
    <div className='w-[400px] m-4'>
      <h2>Funding Opportunities</h2>
      <p>Explore a wealth of grants, scholarships, and awards tailored to support artists from underrepresented regions. Turn your dreams into reality with the financial resources to bring your visions to life.</p>
    </div>
  </div>
    </div>




   
<div className='relative bg-transparent py-24'>
  <div className='relative z-10 py-24 bg-black/70'>
    <h1 className='mb-6 backdrop-blur-md text-center text-white   md:text-4xl text-xl rounded-2xl'>Empowering Artists from Extinction Countries</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md  rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Visibility</h2>
          <p>We shine a spotlight on the extraordinary talents of artists from regions facing cultural, political, or economic challenges. Our platform amplifies their voices and connects them to a global audience.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Mentorship</h2>
          <p>Through our artist-to-artist mentorship program, experienced professionals guide and support emerging artists, sharing invaluable insights and fostering their creative growth.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Community</h2>
          <p>Our community of visionary artists from diverse backgrounds provides a nurturing environment for collaboration, idea-sharing, and mutual inspiration. Together, we break down barriers and redefine the global art landscape.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <p>We offer a comprehensive suite of resources, from funding opportunities to professional development workshops, empowering artists to thrive and reach new heights in their creative journeys.</p>
        </blockquote>
      </figure>
    </div>
  </div>
  <img src={artist} alt='' className='absolute inset-0 w-full h-full object-cover z-0' />
</div>




    

<section className="py-10 sm:py-16 lg:py-24 relative  bg-gradient-to-b from-gray-400 on to-yellow-200 ">
  <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8 z-10 bg-black/30 rounded-xl p-10">
  <h1 className='pt-10'>Discover Global Art Stage Openings</h1>
    <div className="max-w-2xl mx-auto   text-center">
    </div>

    <ul className="max-w-md mx-auto mt-16 space-y-12">
      <li className="relative flex items-start">
        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
          <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="ml-6">
          <h2>Explore</h2>
          <p>Dive into our curated database of international art exhibitions, residencies, and festivals, spanning a wide range of media and genres.</p>
        </div>
      </li>

      <li className="relative flex items-start">
        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
          <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
        <div className="ml-6">
          <h2>Apply</h2>
          <p>Easily submit your applications to the opportunities that align with your artistic vision and career goals. Our user-friendly platform streamlines the process.</p>
        </div>
      </li>

      <li className="relative flex items-start">
        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
          <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="ml-6">
          <h2>Connect</h2>
          <p>Forge meaningful connections with art professionals and organizations around the world. Unlock valuable networking opportunities and unlock new collaborations.</p>
        </div>
      </li>
    </ul>
  </div>
</section>



    </div>
  )
}

export default First4