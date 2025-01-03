import React, { useEffect, useState } from 'react'
import Tabs from '../components/Tabs'
import bg from '../assets/Page3/menu_home.png'
import img1 from '../assets/Page3/home__trending-image.png';
import img2 from '../assets/Page3/home__recommended-image.png'
import img3 from '../assets/Page3/home__watch.png'
import img4 from '../assets/Page3/home__watch-image-wrapper.png'
import img5 from '../assets/Page3/home__watch-image1.png'
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import shortcut1 from '../assets/Page3/servers - white.png'
import shortcut2 from '../assets/Page3/favorites - white.png';
import shortcut3 from '../assets/Page3/quickmatch - white.png';
import shortcut4 from '../assets/Page3/battlepacks - white.png';
import shortcut5 from '../assets/Page3/options - white.png';
import multi1 from '../assets/Page3/multiplayer__select-image - 01.png'
import multi2 from '../assets/Page3/multiplayer__select-image - 02.png'
import multi3 from '../assets/Page3/multiplayer__select-image - 03.png'
import multi4 from '../assets/Page3/multiplayer__select-image - 04.png'
import campaignImg from '../assets/Page3/campaign__select-image-w.png'
import soldier from '../assets/Page3/soldier__look.png'
import soldierInfo from '../assets/Page3/soldier__info.png'
import tank from '../assets/Page3/soldier__tank-white.svg'
import riffle from '../assets/Page3/acw-white.svg'
import key from '../assets/Page3/engineer-white.svg'
import revolver from '../assets/Page3/m9-white.svg'
import storeimg1 from '../assets/Page3/store__bfv-trending-image - 01.png'
import storeimg2 from '../assets/Page3/store__bf4-trending-image - 02.png'
import options from '../assets/Page3/options.png'
import credits from '../assets/Page3/credits.svg'

import CardSlider from '../components/CardSlider';
import Card4 from '../components/Card4';
import { LinearProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';


const cards = [
  <Link to={'/server-browser'}><Card1 img={img1} text1={'DEFUSE'} text2={'ALL MAPS'} text3={'3 RESULTS'} category={'TRENDING'} /></Link>,
  <Link to={'/server-browser'}><Card2 img={img2} text1={'CONQUEST LARGE'} text2={'OPERATION WHITEOUT, HAM'} text3={'22 RESULTS'} category={'FAVOURITE'} /></Link>,
  <Card3 img={img3} text1={'LEARN BATTLEFIELD 4 BASICS WITH OSHY'} category={'WATCH'} show={true} videoUrl={'https://www.youtube.com/embed/6o5VPMtCzTI?autoplay=1'} />,
  <Card3 img={img4} text1={'BEGINNERS GUIDE TO BATTLEFIELD 4 BY ASAL'} category={'WATCH'} show={true} videoUrl={'https://www.youtube.com/embed/6o5VPMtCzTI?autoplay=1'} />,
  <Card3 img={img5} text1={'NEW INTO THE JUNGLE TRAILER'} text2={'ALL MAPS'} category={'WATCH'} show={true} videoUrl={'https://www.youtube.com/embed/6o5VPMtCzTI?autoplay=1'} />,
  <Card3 img={img5} text1={'LEARN ABOUT NEW WEAPONS'} text2={'ALL MAPS'} category={'NEWS'} show={true} videoUrl={'https://www.youtube.com/embed/6o5VPMtCzTI?autoplay=1'} />,
]



const Battlefield4 = () => {

  const [loading, setLoading] = useState(false);
  const [recentData, setRecentData] = useState([]);
  const navigate = useNavigate();
  //fetch the data here
  const fetchedData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/v1/getData', {
        method: "GET",
        headers: {
          'Accept': 'application/json', // Expecting JSON response
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON response

      if (result.data && Array.isArray(result.data)) {
        const lastFiveEntries = result.data.slice(-6); // Get the last five entries
        setRecentData(lastFiveEntries);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error); // Handle any errors
    }
  };

  const handleClick = (item) => {
    console.log(item);
    console.log("Clicked");
    navigate('/server-info', { state: { item } });
  }

  useEffect(() => {
    fetchedData();
  }, []);

  const tabs = [
    {
      label: "HOME",
      content:
        <div className="ml-24 my-6 flex flex-col gap-8">
          <h2 className='text-2xl'>Good Afternoon Cookie</h2>
          <div className='w-[65%]'>
            <CardSlider cards={cards} />
          </div>
          {/* shortcuts  */}
          <div className='flex flex-col gap-4'>
            <h3>
              SHORTCUTS
            </h3>
            <div className='flex gap-2 flex-wrap'>
              <span className='px-6 py-2 bg-black bg-opacity-40'> <img src={shortcut1} alt="shortcut1" /></span>
              <span className='px-6 py-2 bg-black bg-opacity-40'> <img src={shortcut2} alt="shortcut1" /></span>
              <span className='px-6 py-2 bg-black bg-opacity-40'> <img src={shortcut3} alt="shortcut1" /></span>
              <span className='px-6 py-2 bg-black bg-opacity-40'> <img src={shortcut4} alt="shortcut1" /></span>
              <span className='px-6 py-2 bg-black bg-opacity-40'> <img src={shortcut5} alt="shortcut1" /></span>

            </div>
          </div>

          <div className='flex flex-col gap-4 w-[65%] overflow-x-hidden'>
            <div className='flex justify-between'>
              <h3>
                RECENTLY PLAYED
              </h3>
              <Link to={'/server-browser'}><h3>SEE ALL</h3></Link></div>
            {
                
            loading ? (
              <div className='flex h-[20vh] items-center justify-center w-[60%]'><Spinner /> </div>
              ) : (
              <div className='flex gap-2 overflow-x-hidden'>
                {
                  recentData.map((recent, index) => (
                    <div key={index} onClick={() => handleClick(recent)} >
                      <Card2 img={recent.imageUrl} text1={recent.title} text2={recent.map} text3={recent.region} category={'RECENT SERVER'} />
                    </div>
                  ))
                }
  
              </div>
              )
            }

          </div>
        </div>
    },
    {
      label: "MULTIPLAYER",
      content:
        <div className="ml-24 my-6 flex gap-2 flex-wrap">
          <Link to={'/battlefield4/quick-match'}><Card4 img={multi1} text1={'QUICK MATCH'} text2={'The quickest way to get into any of the game modes'} /></Link>
          <Link to={'/battlefield4/squad-join'}><Card4 img={multi2} text1={'SQUAD JOIN'} text2={'Play with some Friends'} /></Link>
          <Link to={'/server-browser'}><Card4 img={multi3} text1={'SERVER BROWSER'} text2={"The old school way of finding that perfect game. Set up your filters and you're ready to go"} /></Link>
          <Link to={'/test-range'}><Card4 img={multi4} text1={'TEST RANGE'} text2={"Try out all the weapons, gadgets and vehicles to improve your skills on the battlefield"} /></Link>
        </div>
    },
    {
      label: "CAMPAIGN",
      content:
        <div className="mx-24 my-6 flex gap-2">
          <Link to={'/campaign'} className="h-[200px] group overflow-hidden relative">
            <img
              src={campaignImg}
              alt="img1"
              className="transition-all duration-300 ease-in-out  group-hover:h-[100px]"
              style={{ height: "200px", objectFit: "cover", display: "block" }}
            />
            <div
              className="bg-white h-[5px] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></div>
            <div className="absolute bottom-2 left-2 flex flex-col font-semibold">
              <p className="text-white text-opacity-50 ">
                PLAY
              </p>
              <p>BATTLEFIELD 4 CAMPAIGN</p>
            </div>
          </Link>
        </div>
    },
    {
      label: "SOLDIER",
      content:
        <section className="ml-24 mr-10 my-6 flex lg:flex-row items-center flex-col gap-2">
          <img src={soldier} alt="soldierImg" width={350} />
          <div className='flex flex-col gap-2'>
            <img src={soldierInfo} alt="soldierinfo" width={350} />
            <div className='flex gap-10'>
              {/* list items  */}
              <div className='flex flex-col w-[250px] text-xs font-semibold'>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>WEAPONS</span>
                  <div className='flex flex-col'>
                    <span>134/135</span>
                    <LinearProgress
                      variant="determinate"
                      value={80}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700', // Yellow color
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>KITS</span>
                  <div className='flex flex-col'>
                    <span>46/64</span>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>VEHICLES</span>
                  <div className='flex flex-col'>
                    <span>77/182</span>
                    <LinearProgress
                      variant="determinate"
                      value={40}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>MEDALS</span>
                  <div className='flex flex-col'>
                    <span>11/54</span>
                    <LinearProgress
                      variant="determinate"
                      value={20}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>ASSIGNMENTS</span>
                  <div className='flex flex-col'>
                    <span>21/110</span>
                    <LinearProgress
                      variant="determinate"
                      value={20}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>DOG TAGS</span>
                  <div className='flex flex-col'>
                    <span>21/110</span>
                    <LinearProgress
                      variant="determinate"
                      value={50}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FFD700',
                        },
                      }}
                    />
                  </div>
                </div>
                <line className='w-full h-px bg-lineColor '></line>
                <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                  <span>BATTLEPACKS</span>
                </div>
                <line className='w-full h-px bg-lineColor '></line>

              </div>
              {/* Equipments  */}
              <div className='flex flex-col gap-8'>
                <div className='flex gap-16'>
                  <div className='flex flex-col'>
                    <span className='text-sm' >WINS</span>
                    <span className='font-semibold text-2xl'>44%</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm' >SCORE/MIN</span>
                    <span className='font-semibold text-2xl'>592</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm' >KILLS/MIN</span>
                    <span className='font-semibold text-2xl'>0.60</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                  <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 w-[180px] text-xs hover:bg-white'>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>TOP VEHICLE</span>
                    <div className="flex justify-center group-hover:filter group-hover:brightness-50 transition-all"><img src={tank} alt="tank" /></div>
                    <span className='font-semibold group-hover:text-black'>Main Battle Tank</span>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>33 Kills</span>
                  </div>
                  <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 w-[180px] text-xs hover:bg-white'>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>TOP PRIMARY</span>
                    <div className=" group-hover:filter group-hover:brightness-50 transition-all flex justify-center"><img src={riffle} alt="tank" /></div>
                    <span className='font-semibold group-hover:text-black'>ACW-R</span>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>495 Kills</span>
                  </div>
                  <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 text-xs hover:bg-white w-[180px]'>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>TOP CLASS</span>
                    <div className="flex justify-center group-hover:filter group-hover:brightness-50 transition-all"><img src={key} alt="tank" /></div>
                    <span className='font-semibold group-hover:text-black'>ENGINEER</span>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>828,514 score</span>
                  </div>
                  <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 w-[180px] text-xs hover:bg-white'>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>TOP SIDEARM</span>
                    <div className="flex justify-center group-hover:filter group-hover:brightness-50 transition-all"><img src={revolver} alt="tank" width={100} /></div>
                    <span className='font-semibold group-hover:text-black'>M9</span>
                    <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>112 Kills</span>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </section>
    },
    {
      label: "STORE",
      content:
        <section className="ml-24 mr-10 my-6 flex gap-2">
          <div className='flex gap-6 lg:flex-row flex-col'>
            {/* list items  */}
            <div className='flex flex-col w-[250px] text-xs font-semibold'>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                <span>BATTLEPACKS</span>
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                <span>SHORTCUT KITS</span>
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                <span>EXPANSIONS</span>
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center justify-between hover:bg-white hover:text-black p-2'>
                <span>PREMIUM</span>
              </div>
              <line className='w-full h-px bg-lineColor '></line>

            </div>
            {/* cards  */}
            <div className='flex gap-2 lg:flex-row md:flex-row flex-col'>
              <div className="h-[200px] group overflow-hidden relative">
                <img
                  src={storeimg1}
                  alt="img1"
                  className="transition-all duration-300 ease-in-out w-full group-hover:h-[100px]"
                  style={{ height: "200px", objectFit: "cover", display: "block" }}
                />
                <div
                  className="bg-white h-[5px] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                ></div>
                <div className="absolute bottom-2 left-2 flex flex-col font-semibold">
                  <p className="text-white">
                    PLAY
                  </p>
                  <p>BATTLEFIELD 4 CAMPAIGN</p>
                </div>
              </div>
              <Card3 img={storeimg2} text1={'SECURE A PREMIUM MEMEBERSHIP'} />
            </div>

          </div>


        </section>
    },
    {
      label: "MORE",
      content:
        <section className="ml-24 mr-10 my-6 flex gap-2">
          <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 w-[180px] text-xs hover:bg-white'>
            <div className="flex justify-center items-center group-hover:filter group-hover:brightness-50 transition-all py-8"><img src={options} alt="tank" width={80} /></div>
            <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>OPTIONS</span>
          </div>
          <div className='group flex flex-col bg-black bg-opacity-40 px-2 py-2 w-[180px] text-xs hover:bg-white'>
            <div className="flex justify-center items-center group-hover:filter group-hover:brightness-50 transition-all py-8"><img src={credits} alt="tank" width={80} /></div>
            <span className='text-white text-opacity-70 group-hover:text-black group-hover:text-opacity-70'>CREDITS</span>
          </div>
        </section>
    },
  ];

  return (
    <div className="bg-cover bg-fixed bg-center lg:min-h-[100vh] min-h-[150vh] w-full py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Battlefield4

