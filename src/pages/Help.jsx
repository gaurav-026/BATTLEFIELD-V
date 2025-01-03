import React from 'react'
import bg from '../assets/Page8/menu__help.png'
import Tabs from '../components/Tabs'


const Help = () => {

    const tabs = [
        {
          label: 'HELP',
          content: 
          <section className="ml-28 mr-10 my-16 flex flex-col gap-12">
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>Get started in Battlefield 1</h1>
                    <p className='font-medium'>Redeem your code, download and install Battlefield 1</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>Battlefield 1 features and game modes</h1>
                    <p className='font-medium'>What’s new in Battlefield 1? Explore new features and game modes, find out which class suits your play-style, and learn how Scraps and Warbonds work.</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>Battlefield 1 - Custom Games</h1>
                    <p className='font-medium'>Arriving just in time for Batlefest on November 16, 2016, Custom Games bring new challenges for all Battlefield 1 players. Find out more about Fog of War, Hardcore servers and Standard Issue Rifles.</p>
                </div>

                <button className='absolute bottom-10 left-24 border-2 border-white px-16 py-2 text-xl font-semibold hover:bg-white hover:text-black'>CONTACT US</button>
          </section>
      
        }
      ]
  return (
    <div className="bg-cover bg-fixed bg-center min-h-[100vh] w-full py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Help
