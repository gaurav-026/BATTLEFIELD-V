import React, { useState } from 'react'
import bg from '../assets/Page3/menu_home.png'
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { quickData } from '../data/quickData';



const QuickMatch = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first item
  return (
    <div className="bg-cover bg-fixed flex flex-col bg-center min-h-[100vh] w-full pl-24 pt-5"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex flex-col '>
        <div className='flex items-center'>
          <Link to={'/server-browser'}  ><FaAngleLeft size={30} /></Link>
          <span className='font-semibold text-sm'>MULTIPLAYER /</span>
        </div>
        <span className='font-semibold text-3xl'>QUICK MATCH</span>
      </div>
      <div className="flex lg:gap-8 md:gap-8 gap-4">
        {/* Left Section: List */}
        <div className="my-16 flex flex-col">
          {quickData.map((data, index) => (
            <h2
              key={index}
              className={`border-y border-white border-opacity-20 md:px-4 px-2 lg:px-4 md:py-2 py-1 lg:py-2 font-semibold text-xs md:text-lg lg:text-lg lg:w-full md:w-full w-28 ${index === activeIndex ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                }`}
              onMouseEnter={() => setActiveIndex(index)} // Update active index on hover
            >
              {data.text1}
            </h2>
          ))}
        </div>

        {/* Right Section: Image and Text2 */}
        <div className="flex flex-col gap-4 w-[40%] my-16 mr-4">
          <img
            src={quickData[activeIndex].img}
            alt="Quick Match"
            className="w-fit object-cover "
          />
          <p className="lg:text-sm md:text-sm text-xs font-medium w-full "
          dangerouslySetInnerHTML={{ __html: quickData[activeIndex].text2 }}
          />
        </div>
      </div>


    </div>
  )
}

export default QuickMatch
