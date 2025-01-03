import React from 'react'
import bg from '../assets/Page8/menu__news.png'
import Tabs from '../components/Tabs'
import NewsCard from '../components/NewsCard'
import { watchData } from '../data/watchData'

const tabs = [
  {
    label: 'WATCH',
    content: 
    <section className="ml-28 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[65%] gap-2">
         {
          watchData.map((news, index)=>(
            <NewsCard img={news.imgUrl} text1={news.text1} text2={news?.text2} category={news.category} key={index} show={true} />
          ))
         }
    </section>
  },
]

const Watch = () => {
  return (
    <div className="bg-cover bg-fixed bg-center min-h-[100vh] w-full py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Watch
