import React from 'react'
import IndivisualProductCard from '../components/cards/IndivisualProductCard'

const Favourite = () => {
  return (
    <div>
      <div className='text-2xl justify-center font-bold text-gray-700 mt-10 text-center '>Favourite Products</div>      
      <div className='flex flex-wrap p-5 justify-between'>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
        <IndivisualProductCard/>
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

export default Favourite