import React from 'react'
import bg from '../assets/Page8/menu__news.png'
import Tabs from '../components/Tabs'
import NewsCard from '../components/NewsCard'
import { newsData } from '../data/newsData'

const tabs = [
  {
    label: 'NEWS',
    content: 
    <section className="ml-28 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[65%] gap-2">
         {
          newsData.map((news, index)=>(
            <NewsCard img={news.imgUrl} text1={news.text1} text2={news?.text2} category={news.category} key={index}  />
          ))
         }
    </section>
  },
  {
    label: 'UPDATES',
    content: 
    <div className='flex justify-center items-center'><p>Page will be available soon..</p></div>
  }
]

const News = () => {
  return (
    <div className="bg-cover bg-fixed bg-center min-h-[100vh] w-full py-20 "
      style={{ backgroundImage: `url(${bg})` }}>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default News
