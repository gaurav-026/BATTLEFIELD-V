import React from 'react'
import bg from '../assets/Page5/menu__career.png'
import career1 from '../assets/Page5/career__player-picture.png'
import career2 from '../assets/Page5/career__games.png'
import career3 from '../assets/Page5/career__games-1.png'

import Tabs from '../components/Tabs'


const tabs = [
  {
    label: 'CAREER',
    content: 
    <section className="mx-24 my-16 flex lg:gap-36 md:gap-20 gap-16 lg:flex-row flex-col">
      {/* image & details  */}
      <div className='flex flex-col gap-20'>
        {/* image  */}
      <div className='flex flex-col gap-4'>
      <img src={career1} alt="career1" width={100} />
      <span className='font-semibold text-xl'>COOKIE</span>
      </div>
      {/* details  */}
      <div className='flex flex-col gap-6'>
      <div className='flex gap-16'>
        <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>WINS</span>
        <p className='font-semibold text-4xl'>48%</p>
        </div>
        <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>TIME</span>
        <p className='font-semibold text-4xl'>240H</p>
        </div>
        <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>KILLS</span>
        <p className='font-semibold text-4xl'>11,446</p>
        </div>
        
      </div>
      <div className='flex gap-16'>
      <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>SCORE/MIN</span>
        <p className='font-semibold text-4xl'>956</p>
        </div>
        <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>KILLS/MIN</span>
        <p className='font-semibold text-4xl'>0.78</p>
        </div>
        <div className='flex flex-col'>
        <span className='text-white text-opacity-40'>K/D</span>
        <p className='font-semibold text-4xl'>1.25</p>
        </div>
      </div>
      </div>
      </div>
      <div className='flex gap-2'>
      <img src={career2} alt="career1" width={200} />
      <img src={career3} alt="career1" width={200}/>
      </div>
      
      
    </section>

  }
]

const Career = () => {
  return (
    <div className="bg-cover bg-fixed bg-center min-h-[100vh] w-full py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Career
