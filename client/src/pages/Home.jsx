import React from 'react'
import CarouselCustomArrows from '../components/HomeCrousal'
import {category} from '../utils/data'
import CatergoryCard from '../components/cards/CatergoryCard'
import IndivisualProductCard from '../components/cards/IndivisualProductCard'


const Home = () => {
  return (
    <div>
      <CarouselCustomArrows/>
      
      <div className = 'flex w-full items-center text-center font-bold text-2xl my-10 justify-center text-zinc-500 '>See All Categories</div>
      <div className='flex flex-wrap gap-6 justify-center'>
        {category.map((category)=>(
          <CatergoryCard category = {category} >hi</CatergoryCard>
        ))}
      </div>
      <div className = 'flex w-full items-center text-center font-bold text-2xl mt-10 justify-center text-zinc-500 '>BestSeller</div>
      <div className='flex flex-wrap gap-4 mt-8 items-center justify-center'>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
      </div>
    </div>
  )
}

export default Home