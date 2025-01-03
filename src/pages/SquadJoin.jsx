import React from 'react'
import img1 from '../assets/Root/new squad-black.svg'
import img2 from '../assets/Root/squad-white.svg'
import bg from '../assets/Root/squad_join.png'
import { Link} from 'react-router-dom';




const SquadJoin = () => {
    return (
        <div className="bg-cover bg-fixed flex flex-col bg-center min-h-[100vh] w-full pl-12 md:pl-24 lg:pl-24 pt-10" style={{ backgroundImage: `url(${bg})` }}>
            <span className='font-semibold text-3xl bg-black bg-opacity-40 py-1 px-2 w-fit'>SQUAD JOIN LOBBY</span>
            <div className='flex justify-center items-center w-full my-28'>
            <div className='flex flex-col lg:w-[40vw] md:w-[40vw] w-full mr-12'>
                <div className='flex justify-between bg-black bg-opacity-60 p-1'>
                    <span className='font-semibold text-lg '>ACTIVE FRIEND'S SQUADS</span>
                    <span className='font-semibold text-lg '>PLAYERS</span>
                </div>
                <div className='flex items-center bg-white bg-opacity-80 gap-4 px-2 py-1'>
                    <img src={img1} alt="img1"  />
                    <p className='text-black font-semibold'>New Squad</p>
                </div>
                <div className='flex items-center bg-black bg-opacity-60 gap-4 px-2 py-1'>
                    <img src={img2} alt="img1"  />
                    <p className='font-semibold'>No Squads with friends available</p>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-3 absolute md:left-24 left-12 lg:left-24 bottom-10'>
                <p className='font-semibold text-sm mr-12'>Create a squad for your friends to join to play together.</p>
                <div className='flex gap-1'>
                    <Link to={'/category/battlefield4'} className='lg:px-16 md:px-16 px-8 border border-white hover:bg-black hover:bg-opacity-50 bg-black bg-opacity-20'>BACK</Link>
                    <Link to={'/battlefield4/squad-join'} className='lg:px-16 md:px-16 px-8 border border-white hover:bg-black hover:bg-opacity-50 bg-black bg-opacity-20'>REFRESH</Link>
                </div>
            </div>
        </div>
    )
}

export default SquadJoin
