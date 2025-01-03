import React from 'react'
import bg from '../assets/Page3/menu_home.png'
import campaign from '../assets/Root/campaign__image.png'
import img1 from '../assets/Root/bronze.png'
import img2 from '../assets/Root/silver.png'
import img3 from '../assets/Root/gold.png'
import { Link } from 'react-router-dom';




const Campaign = () => {
    return (
        <div className="bg-cover bg-fixed bg-center flex flex-col gap-10 min-h-[100vh] w-full pl-24 pt-10" style={{ backgroundImage: `url(${bg})` }}>
            <span className='font-semibold text-3xl bg-black bg-opacity-40 py-1 px-2 w-fit'>CAMPAIGN</span>
            <div className='flex justify-between lg:flex-row md:flex-row flex-col'>
                <div className='flex flex-col w-full '>
                    <span className='font-semibold text-2xl text-black bg-white  py-1 px-2 w-fit'>RESUME</span>
                    <span className='font-semibold text-2xl text-white py-1 px-2'>REPLAY MISSIONS</span>
                    <span className='font-semibold text-2xl text-white py-1 px-2'>START NEW-CAMPAIGN</span>
                </div>
                <div className='flex justify-end pr-10 w-full'>

                    <div className='flex flex-col gap-3 w-fit'>
                        <div className='flex flex-col gap-1'>
                            <span className='flex bg-black bg-opacity-60 p-1 font-semibold text-xl'>
                                SHANGHAI
                            </span>
                            <span className='flex bg-black bg-opacity-30 p-1 font-semibold text-xl'>
                                React the Hotel. Meet up with your CIA contact at the Zhi-You Tower.
                            </span>
                            <img src={campaign} alt="campaign" width={800} />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <div className='flex gap-1'>
                                <span className='flex bg-black bg-opacity-60 p-1 font-semibold text-lg w-full'>
                                    DIFFICULTY
                                </span>
                                <span className='flex bg-black bg-opacity-60 p-1 font-semibold text-lg w-full'>
                                    COLLECTIBLES
                                </span>
                                <span className='flex bg-black bg-opacity-60 p-1 font-semibold text-lg w-full'>

                                </span></div>
                            <div className='flex gap-1'>
                                <span className='flex bg-black bg-opacity-30 p-1 font-semibold text-lg w-full'>
                                    NORMAL
                                </span>
                                <span className='flex bg-black bg-opacity-30 p-1 font-semibold text-lg w-full'>
                                    DOG TAGS 1/3
                                </span>
                                <span className='flex bg-black bg-opacity-30 p-1 font-semibold text-lg w-full'>
                                    WEAPONS
                                </span></div>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <span className='flex bg-black bg-opacity-60 p-1 font-semibold text-xl'>
                                MISSIOIN ASSIGNMENTS
                            </span>
                            <div className='flex justify-between gap-1'>
                                <div className='max-w-64 px-10 py-4 bg-black bg-opacity-40 h-fit'><img src={img1} alt="campaign" /></div>
                                <div className='max-w-64 px-10 py-4 bg-black bg-opacity-40 h-fit'><img src={img2} alt="campaign" /></div>
                                <div className='max-w-64 px-10 py-4 bg-black bg-opacity-40 h-fit'><img src={img3} alt="campaign" /></div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-3 absolute left-24 bottom-10'>
                <Link to={'/category/battlefield4'} className='px-16 border border-white hover:bg-black hover:bg-opacity-50 bg-black bg-opacity-20'>BACK</Link>
            </div>
        </div>
    )
}

export default Campaign
