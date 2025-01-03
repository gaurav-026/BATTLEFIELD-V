import React from 'react'
import bg from '../assets/Page3/menu_home.png'
import { FaAngleLeft, FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { mapRotationData } from '../data/MapRotation';
import Card5 from '../components/Card5';



const ServerInfo = () => {

  const location = useLocation();
  const { item } = location.state || {}; // Access the passed data
  return (
    <div className="bg-cover bg-fixed flex flex-col bg-center min-h-[100vh] w-full pl-24 pt-5"
      style={{ backgroundImage: `url(${bg})` }}>

      <div className='flex flex-col'>
        <div className='flex items-center'>
          <Link to={'/server-browser'}  ><FaAngleLeft size={30} /></Link>
          <span className='font-semibold text-sm'>MULTIPLAYER / SERVER BROWSER</span>
        </div>
        <span className='font-semibold text-3xl'>SERVER INFO</span>
      </div>
      <div className='flex flex-col gap-6 my-16 lg:w-[70%] md:w-[70%] w-[90%] '>
        <h1 className='font-semibold text-3xl'>{item.title}</h1>
        <div className='flex gap-2 font-semibold text-white text-opacity-70 '>
          <img src={item.countryImgUrl} width={30} alt="country flag" />
          {item.map} - {item.map} - {item.mode} - {item.ticketRate} HZ
        </div>
        <p className='font-semibold text-white text-opacity-70 '>
          {item.serverDetails}
        </p>
        <div className='flex gap-2 w-full justify-between'>
        <button className='py-3 border border-white border-opacity-60 hover:bg-white hover:text-black font-semibold w-full text-center'>JOIN</button>
        <button className='py-3 border border-white border-opacity-60 hover:bg-white hover:text-black font-semibold w-full text-center'>SPECTATE</button>
        <button className='py-3 border border-white border-opacity-60 hover:bg-white hover:text-black font-semibold w-full text-center'>JOIN AS COMMANDER</button>
        <span className='py-3 border border-white border-opacity-60 hover:bg-white hover:text-black font-semibold w-full text-center flex gap-1 items-center justify-center '><FaStar/> 13672</span>
        </div>
        <div className='flex justify-between gap-10'>
          <div className='flex flex-col'>
            <p className='font-semibold'>PLAYERS</p>
            <span className='font-semibold text-3xl'>{item.players}/64</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>PING</p>
            <span className='font-semibold text-3xl'>{item.ping}ms</span>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>TICKETRATE</p>
            <span className='font-semibold text-3xl'>{item.ticketRate} Hz</span>
          </div>
        </div>
        <div className='flex justifiy-between gap-10 lg:flex-nowrap md:flex-nowrap flex-wrap'>
            <div className='flex-col w-full'>
              <h3 className='my-2 font-semibold'>SETTINGS</h3>
              {
                item.setting.map((list, index)=>(
                  <span key={index} className='flex justify-between gap-4 border-b border-white border-opacity-20 px-2 py-1'>{list.name} <p>{list.status}</p></span>
                ))
              }
            </div>
            <div className='flex-col w-full'>
              <h3 className='my-2 font-semibold'>ADVANCED</h3>
              {
                item.advanced.map((list, index)=>(
                  <span key={index} className='flex justify-between gap-4 border-b border-white border-opacity-20 px-2 py-1'>{list.name} <p>{list.status}</p></span>
                ))
              }
            </div>
            <div className='flex-col w-full'>
              <h3 className='my-2 font-semibold'>RULES</h3>
              {
                item.rules.map((list, index)=>(
                  <span key={index} className='flex justify-between gap-4 border-b border-white border-opacity-20 px-2 py-1'>{list.name} <p>{list.status}</p></span>
                ))
              }
            </div>
        </div>
        <h3 className='my-2 font-semibold'>MAP ROTATION</h3>
        <div className='flex flex-wrap gap-4'>
              {
                mapRotationData.map((cardItem, index)=>(
                  <Card5 img={cardItem.imgUrl} text1={cardItem.text1} text2={cardItem.text2} />
                ))
              }
        </div>
      </div>

    </div>
  )
}

export default ServerInfo
