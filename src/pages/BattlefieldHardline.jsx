import React from 'react'
import Tabs from '../components/Tabs'
import bg from '../assets/Page4/menu__BH.png'
import img from '../assets/Page4/BH__select-image.png'

const BattlefieldHardline = () => {

  const tabs = [
    {
      label: 'HOME',
      content: 
      <section className="ml-24 my-6 flex flex-col gap-8">
        <h2 className='text-2xl'>Good Afternoon Cookie</h2>
        <div className="h-[200px] group overflow-hidden relative w-fit">
              <img
                src={img}
                alt="img1"
                className="transition-all duration-300 ease-in-out group-hover:h-[100px]"
                style={{ height: "200px", objectFit: "cover", display: "block" }}
              />
              <div
                className="bg-white h-[5px] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              ></div>
              <div className="absolute bottom-2 left-2 flex flex-col font-semibold">
                <p className="text-white">
                  PLAY BATTLE HARDLINE VIA
                </p>
                <p>BATTLELOG</p>
              </div>
            </div>
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

export default BattlefieldHardline
