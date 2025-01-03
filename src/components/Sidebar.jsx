import React from 'react'
import img1 from '../assets/MainPageAssets/side-menu__game-2.png'
import img2 from '../assets/MainPageAssets/side-menu__game.png'
import img3 from '../assets/MainPageAssets/side-menu__game-1.png'
import img4 from '../assets/MainPageAssets/side-menu__game-3.png'
import img5 from '../assets/MainPageAssets/side-menu__career.png'
import img6 from '../assets/MainPageAssets/side-menu.png'
import img7 from '../assets/MainPageAssets/side-menu-1.png'
import img8 from '../assets/MainPageAssets/side-menu__help.png'
import img9 from '../assets/MainPageAssets/side-menu__quit.png'
import { Link, useLocation } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-fit fixed left-0 flex flex-col justify-between border-r border-lineColor border-1 px-2 pt-36 pb-4 h-screen">
    <div className="flex flex-col gap-3 px-3">
      {[
        { to: '/', img: img1, label: 'Battlefield5' },
        { to: '/category/battlefield1', img: img2, label: 'Battlefield1' },
        { to: '/category/battlefield4', img: img3, label: 'Battlefield4' },
        { to: '/category/battlefield-hardline', img: img4, label: 'Battlefield Hardline' },
        { to: '/category/career', img: img5, label: 'Career' },
        { to: '/category/watch', img: img6, label: 'Watch' },
        { to: '/category/news', img: img7, label: 'News' },
      ].map((item, index) => (
        <Link
          key={index}
          className={`group relative flex items-center ${
            location.pathname === item.to ? 'border-l-2 border-green pl-2' : ''
          }`}
          to={item.to}
        >
          <img src={item.img} alt={item.label} className="w-8 opacity-80 hover:opacity-100" />
          <div
            className="absolute text-white font-light text-xs top-[8px] left-[50px] bg-black py-1 px-2 rounded-sm opacity-0 group-hover:opacity-100 transition duration-300"
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
    <div className="w-full flex flex-col gap-6 items-center mb-10">
      <Link
        className={`group relative ${
          location.pathname === '/category/help' ? 'border-l-4 border-green pl-2' : ''
        }`}
        to="/category/help"
      >
        <img src={img8} alt="Help" className="opacity-80 hover:opacity-100" />
      </Link>
      <Link
        className={`group relative ${
          location.pathname === '/category/logout' ? 'border-l-4 border-green pl-2' : ''
        }`}
        to="/category/logout"
      >
        <img src={img9} alt="Logout" className="opacity-80 hover:opacity-100" />
      </Link>
    </div>
  </div>
  )
}

export default Sidebar
