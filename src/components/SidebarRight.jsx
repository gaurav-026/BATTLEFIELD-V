import React from 'react'
import { Link } from 'react-router-dom'
import squad from '../assets/MainPageAssets/squad.png'
import join from '../assets/MainPageAssets/join.png'
import img1 from '../assets/MainPageAssets/home__friend-picture-MaryJane.png'
import img2 from '../assets/MainPageAssets/home__friend-picture.png'
import online from '../assets/MainPageAssets/online.png'
import offline from '../assets/MainPageAssets/offline.png'

const SidebarRight = () => {
    return (
        <div>
            <aside className="sidebar">
                <div>
                    <div className='flex gap-28 items-center'><img src={squad} alt="squad" className='w-fit' /> <p className='text-xs '>SQUAD</p></div>
                    <ul className="sidebar-links">
                        <li>
                            <Link to={'#'}>
                                <span className="material-symbols-outlined">
                                    <div className='flex gap-4 items-center'>
                                        <img src={join} alt="join" className='w-8'/>
                                        <p className='text-xs'>Squad Join</p>
                                    </div>
                                </span> </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full h-px bg-lineColor'></div>

                <div>
                    <div className='flex gap-28 items-center'><img src={online} alt="squad" className='w-fit' /> <p className='text-xs'>ONLINE</p></div>
                    <ul className="sidebar-links">
                        <li>
                            <Link to={'#'}>
                                <span className="material-symbols-outlined">
                                    <div className='flex gap-4 items-center'>
                                        <img src={img1} alt="join" className='w-8'/>
                                       <div className='text-xs'> <p>Marry Jain</p> <p>Online</p></div>
                                    </div>
                                </span> </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full h-px bg-lineColor'></div>
                <div>
                    <div className='flex gap-28 items-center'><img src={offline} alt="squad" className='w-fit' /> <p className='text-xs'>OFFLINE</p></div>
                    <ul className="sidebar-links">
                        <li>
                            <Link to={'#'}>
                                <span className="material-symbols-outlined">
                                    <div className='flex gap-4 items-center'>
                                        <img src={img2} alt="join" className='w-8'/>
                                        <div className='text-xs'><p >420</p><p>Offline</p></div>
                                    </div>
                                </span> </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SidebarRight
