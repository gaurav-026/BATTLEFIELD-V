import React, { useEffect, useState } from 'react'
import bg from '../assets/Page3/menu_home.png'
import ServerTag from '../components/ServerTag';
import { FaAngleLeft, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { GiNetworkBars } from "react-icons/gi";
import Spinner from '../components/Spinner';


const ServerBrowser = () => {
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState([]);
  const navigate = useNavigate();
  //fetch the data here
  const fetchedData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://battlefield-v.onrender.com/api/v1/getData', {
        method: "GET",
        headers: {
          'Accept': 'application/json', // Expecting JSON response
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON response
      console.log(result.data); // Do something with the fetched data
      if (result.data) {
        setServerData(result.data);
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
  const tabs = [
    {
      label: "SERVERS",
      content:
        loading ? (
          <div className='flex h-[80vh] items-center justify-center w-[60%]'><Spinner /> </div>

        ) : (
          <div className="mr-10 my-6 flex gap-8 lg:flex-row flex-col">
            <div className='flex flex-col'>
              <div className='flex justify-between pr-6 font-semibold text-white text-opacity-70 text-sm my-2'>
                <span>NAME</span>
                <div className='flex gap-8'>
                  <span>PLAYERS</span>
                  <span>PING</span>
                </div>
              </div>
              {
                serverData.map((item, index) => (
                  item.category === 'Server' && ( // Check if category exists on the item
                    <button
                      key={index}
                      className='group text-semibold hover:bg-white hover:text-black lg:my-0 md:my-0 my-2 border-b border-white border-opacity-20 pr-6'
                      onClick={() => handleClick(item)}
                    >
                      <div className='flex justify-between gap-6 items-center'>
                        <div className='flex gap-2 items-center'>
                          <img src={item.imageUrl} alt="imageurl" className='lg:w-fit md:w-fit lg:h-fit md:h-fit w-40 h-16'/>
                          <div className='flex flex-col gap-1 items-start '>
                            <h2 className='font-semibold text-md text-start'>{item.title}</h2>
                            <div className='flex gap-2 text-sm font-medium text-white text-start text-opacity-70 group-hover:text-black '>
                              <img src={item.countryImgUrl}  className='h-5' alt="country flag" />
                              {item.map} - {item.map} - {item.mode} - {item.ticketRate} HZ
                            </div>
                          </div>
                        </div>
                        <div className='flex gap-6'>
                          <span className='text-md font-semibold'>{item.players}/64</span>
                          <span className='flex items-center gap-1 text-md font-medium text-white text-opacity-70 group-hover:text-black ' ><GiNetworkBars color={`${item.ping > 80 ? 'orange' : 'green'}`} /> {item.ping}</span>
                        </div>
                      </div>
                    </button>
                  )
                ))
              }
            </div>
            <div className='flex flex-col text-md font-semibold '>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center gap-10 justify-between text-white text-opacity-70 hover:bg-white hover:text-black p-2'>
                <span>GAME MODE</span>
                <FaChevronDown color='grey' />
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center text-white text-opacity-70 justify-between hover:bg-white hover:text-black p-2'>
                <span>MAP</span>
                <FaChevronDown color='grey' />
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center text-white text-opacity-70 justify-between hover:bg-white hover:text-black p-2'>
                <span>FREE SLOT</span>
                <FaChevronDown color='grey' />
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <div className='flex items-center text-white text-opacity-70 justify-between hover:bg-white hover:text-black p-2'>
                <span>GAME SIZE</span>
                <FaChevronDown color='grey' />
              </div>
              <line className='w-full h-px bg-lineColor '></line>
              <input type="text" placeholder='FILTER BY NAME..' className='bg-white bg-opacity-0 p-2 border border-white border-opacity-60 my-4' />
              <line classname='w-full h-px bg-lineColor '></line>
              <button className='text-white text-opacity-70 bg-white bg-opacity-0 p-2 border border-white border-opacity-60 hover:bg-white hover:text-black '>FULL FILTER</button>
              <button className='text-white text-opacity-70 bg-white bg-opacity-0 p-2 border border-white border-opacity-60 hover:bg-white hover:text-black my-4'>RESET FILTER</button>
            </div>

          </div>
        )


    },
    {
      label: "FAVOURITES",
      content:
        loading ? (
          <div className='flex h-[80vh] items-center justify-center w-[60%]'><Spinner /> </div>

        ) : (
          <div className="mr-10 my-6 flex gap-8">
            <div className='flex flex-col'>
              <div className='flex justify-between pr-6 font-semibold text-white text-opacity-70 text-sm my-2'>
                <span>NAME</span>
                <div className='flex gap-8'>
                  <span>PLAYERS</span>
                  <span>PING</span>
                </div>
              </div>
              {
                serverData.map((item, index) => (
                  item.category === 'Favourite' && ( // Check if category exists on the item
                    <button
                      key={index}
                      className='group text-semibold hover:bg-white hover:text-black border-b border-white border-opacity-20 pr-6'
                      onClick={() => handleClick(item)}
                    >
                      <div className='flex justify-between gap-6 items-center'>
                        <div className='flex gap-2 items-center'>
                          <img src={item.imageUrl} alt="imageurl" className='lg:w-fit md:w-fit lg:h-fit md:h-fit w-40 h-16'/>
                          <div className='flex flex-col gap-1 items-start '>
                            <h2 className='font-semibold text-md text-start'>{item.title}</h2>
                            <div className='flex gap-2 text-sm font-medium text-white text-start text-opacity-70 group-hover:text-black '>
                              <img src={item.countryImgUrl}  className='h-5' alt="country flag" />
                              {item.map} - {item.map} - {item.mode} - {item.ticketRate} HZ
                            </div>
                          </div>
                        </div>
                        <div className='flex gap-6'>
                          <span className='text-md font-semibold'>{item.players}/64</span>
                          <span className='flex items-center gap-1 text-md font-medium text-white text-opacity-70 group-hover:text-black ' ><GiNetworkBars color={`${item.ping > 80 ? 'orange' : 'green'}`} /> {item.ping}</span>
                        </div>
                      </div>
                    </button>
                  )
                ))
              }
            </div>

          </div>
        )


    },
    {
      label: "RECENT",
      content:
        <div className="ml-24 my-6 flex flex-col gap-8">

          No Recent here
        </div>

    },
  ];

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="bg-cover bg-fixed flex flex-col bg-center min-h-[100vh] w-full pl-24 pt-5"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex flex-col '>
        <div className='flex items-center'>
          <Link to={'/category/battlefield4'}  ><FaAngleLeft size={30} /></Link>
          <span className='font-semibold text-sm'>MULTIPLAYER /</span>
        </div>
        <span className='font-semibold text-3xl'>SERVER BROWSER</span>
      </div>
      <ServerTag tabs={tabs} />
    </div>
  )
}

export default ServerBrowser
