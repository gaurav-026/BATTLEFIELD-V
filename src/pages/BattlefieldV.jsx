import React from 'react'
import bg from '../assets/MainPageAssets/BF.png'
import logo from '../assets/MainPageAssets/BF5-logo.png'
import Tabs from '../components/Tabs';
import { FaCircle } from 'react-icons/fa';


const BattlefieldV = () => {

  //Tabs and their content
  const tabs = [
    {
      label: "HOME",
      content:
        <div className='flex justify-center'>
          <div className='flex flex-col gap-2 absolute left-40 top-60 hidden lg:block'>
            <p className='flex gap-4 text-2xl font-medium text-white items-center'><FaCircle size={24} color='white'/> BATTLEFIELD V</p>
            <p className='flex gap-4 text-xl text-white items-center opacity-70'><FaCircle size={15} color='white'/> FIRESTORM</p>
            <p className='flex gap-4 text-xl text-white items-center opacity-70'><FaCircle size={15} color='white'/> WAR STORIES</p>
            <p className='flex gap-4 text-xl text-white items-center opacity-70'><FaCircle size={15} color='white'/> MULTIPLAYER</p>
            <p className='flex gap-4 text-xl text-white items-center opacity-70'><FaCircle size={15} color='white'/> THE COMPANY</p>
          </div>
          <div className='flex flex-col w-[40%] items-center gap-8'>
            <img src={logo} alt="logo" width={300} />
            <p className='text-center text-xl'>Enter mankind’s greatest conflict as Battlefield™ goes back to its roots in a portrayal of World War 2 where every battle is unique. Never be the same.</p>
            <div className='flex gap-4'>
              <button className='px-10 py-2 bg-black bg-opacity-70 hover:bg-white hover:bg-opacity-40'>PURCHASE GAME</button>
              <button className='px-10 py-2 bg-black bg-opacity-70  hover:bg-white hover:bg-opacity-40'>WATCH TRAILER</button>

            </div>
          </div>
        </div>
    },
    {
      label: "STORE",
      content:
        <p>Page will be available soon..</p>
    },
  ];

  return (
    <div className="bg-cover bg-center min-h-[100vh]  w-[100vw] flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default BattlefieldV
