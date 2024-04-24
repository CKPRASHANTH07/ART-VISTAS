import React from 'react'
import join from '../images/join.png'


const Last4 = () => {
  return (
    <div>
        <div>
        <div className='py-10 mx-auto sm:py-16 lg:py-24 relative bg-gradient-to-t from-cyan-500 to-yellow-200 '>
            <div className='bg-black/30 rounded-xl mx-0 xl:mx-20 '>
  <h1 className='pl-8 pt-20'>Build Your Artistic Network Worldwide</h1>
  <div className='flex lg:flex-row flex-col items-center space-y-8 p-20'>
    <div className='w-[400px] '>
      <h2>Global Reach</h2>
      <p>Connect with a diverse community of artists, curators, and art enthusiasts from over 150 countries, expanding your artistic network worldwide.</p>
    </div>
    <div className='w-[400px]'>
      <h2>Collaboration</h2>
      <p>Engage in meaningful dialogues, share ideas, and co-create innovative projects with like-minded individuals from around the globe.</p>
    </div>
    <div className='w-[400px]'>
      <h2>Upcoming Events</h2>
      <p>Stay up-to-date on the latest art events, exhibitions, and workshops happening in your local and international communities.</p>
    </div>
    <div className='w-[400px]'>
      <h2>Showcase Talent</h2>
      <p>Elevate your artistic profile by showcasing your work to a vast audience of art professionals and enthusiasts worldwide.</p>
    </div>
  </div></div>
    </div>

    <div className='bg-gradient-to-t from-violet-300 to-cyan-500 p-20 '>
      <h1>Showcase Your Work to New Audiences</h1>
      <div className='space-y-10 mt-10'>
      <li>Digital Portfolios</li>

      <p>Create a stunning digital portfolio to present your best work and share it with art curators, galleries, and potential collaborators across the globe. Our user-friendly platform allows you to customise your portfolio and reach new heights in your artistic career.</p>

<li>Virtual Exhibitions</li>

<p>Participate in immersive virtual art exhibitions, connecting your work with art enthusiasts and collectors from around the world. Our state-of-the-art digital gallery space offers a seamless and engaging experience for both artists and audiences.</p>

<li>Social Media Amplification</li>
<p>Leverage our expansive social media channels to showcase your artistic talent and engage with a wider community of art lovers. We'll help you amplify your reach, build your online following, and connect with new opportunities tailored to your creative vision.</p>
</div>
</div>

    <div className='  bg-gradient-to-b from-violet-300 to-white p-20 '>
  <h1>Collaborate with Diverse Artistic Communities</h1>
  <div className='flex md:flex-row flex-col items-center p-20'>
    <div className='w-[400px] m-4'>
      <h2>Connect</h2>
      <p>Forge meaningful connections with artists, curators, and art professionals from diverse cultural backgrounds around the world.</p>
    </div>
    <div className='w-[400px] m-4'>
      <h2>Collaborate</h2>
      <p>Engage in cross-cultural dialogues and co-create innovative projects that challenge traditional artistic boundaries.</p>
    </div>
    <div className='w-[400px] m-4'>
      <h2>Grow</h2>
      <p>Expand your artistic horizons, explore new mediums, and push the limits of your creative practice through collaborative endeavors.</p>
    </div>
  </div>
    </div></div>


    <div className='relative bg-transparent py-24'>
  <div className='relative z-10 py-24'>
    <h1 className='mb-6 backdrop-blur-md bg-white/50 w-fit md:text-4xl text-xl rounded-2xl'>Join Our Community of Visionary Artists</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md  rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Global Reach</h2>
          <p>Tap into a thriving network of artists, curators, and art enthusiasts from over 150 countries, expanding your artistic influence worldwide.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Unique Opportunities</h2>
          <p>Discover a curated selection of international art exhibitions, residencies, and funding opportunities tailored to support your creative vision.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Collaborative Spirit</h2>
          <p>Engage in cross-cultural dialogues, co-create innovative projects, and form meaningful connections that will inspire and elevate your artistic practice.</p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-md rounded-lg shadow-md">
        <blockquote className="max-w-md mx-auto mb-4 lg:mb-8">
          <h2 className="text-xl font-semibold mb-4">Empowerment</h2>
          <p>Access a wealth of resources, mentorship programs, and professional development opportunities to help you thrive as an artist and reach new heights in your career.</p>
        </blockquote>
      </figure>
    </div>
  </div>
  <img src={join} alt='' className='absolute inset-0 w-full h-full object-cover z-0' />
</div>

    </div>
  )
}

export default Last4