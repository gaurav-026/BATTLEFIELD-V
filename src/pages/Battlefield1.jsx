import React from 'react'
import Tabs from '../components/Tabs'
import bg from '../assets/Page2/menu__BF1.png'
import img1 from '../assets/Page2/Vector.png';
import img2 from '../assets/Page2/image 36.png'
import img3 from '../assets/Page2/BF1__home-watch-image - 01.png'
import img4 from '../assets/Page2/BF1__home-watch-image - 02.png'
import img5 from '../assets/Page2/image 37.png'
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import CardSlider from '../components/CardSlider';

const cards = [
  <Card1 img={img1} text1={'ALL MODES'} text2={'ALL MAPS'} text3={'73 RESULTS'} category={'TRENCH CLEANERS RUSH'} />,
  <Card2 img={img2} text1={'CONQUEST'} text2={'ALL MAPS'} text3={'100+ RESULTS'} category={'FAVOURITE'} />,
  <Card3 img={img3} text1={'CHECK OUT THE NEW FIRESTORM TRAILER'} category={'WATCH'} show={true} videoUrl={'https://www.youtube.com/embed/6o5VPMtCzTI?autoplay=1'} />,
  <Card3 img={img4} text1={'See This Month’s Winners'} category={'NEWS'} show={false} />,
  <Card2 img={img5} text1={'CONTINUE THE CAMPAIGN WHERE YOU LEFT OFF'} text2={'ALL MAPS'} category={'CAMPAIGN'} text3={'10+'} />,
]

const tabs = [
  {
    label: "HOME",
    content:
      <div className="ml-24 my-6 flex flex-col gap-8">
        <h2 className='text-2xl'>Good Afternoon Cookie</h2>
        <div className='w-[60%]'>
          <CardSlider cards={cards}/>
        </div>

      </div>

  },
  {
    label: "MULTIPLAYER",
    content:
      <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  },
  {
    label: "CAMPAIGN",
    content:
    <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  },
  {
    label: "SOLDIER",
    content:
    <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  },
  {
    label: "STORE",
    content:
    <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  },
  {
    label: "MORE",
    content:
    <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  },
];


const Battlefield1 = () => {

  return (
    <div className="bg-cover bg-center h-[100vh]  w-[100vw] py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Battlefield1
