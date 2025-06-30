import ListCars from '@/components/rent/ListCars'
import { listCategory } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex items-center gap-2 px-5 pt-5'>
        <div className='bg-[#cfcfcf] rounded-full h-10 w-10'></div>
        <div className='flex flex-col'>
          <h1 className='text-xs text-[#6e6e6e]'>Your Location</h1>
          <h1 className='text-sm'>Pasar Minggu, Jakarta Selatan</h1>
        </div>
      </div>
      <div className='px-12'>
        <input
          placeholder='Find your whip'
          className='border border-[#cfcfcf] rounded-full w-full h-14 translate-y-8 shadow-md px-5 focus:outline-0'
          type="text" name="" id="" />
      </div>
      <div className='bg-[#f0f0f0] border rounded-t-[60px] px-5 py-10'>
        <h1 className='text-lg font-semibold mt-1'>Categories</h1>
        <div className='flex items-center gap-4 my-2'>
          <span className='cursor-ponter bg-black px-3 py-1 rounded-2xl text-sm text-white'>All</span>
          {listCategory.map((item, i) => {
            return (
              <span className='cursor-pointer bg-white px-3 py-1 rounded-2xl text-sm text-[#9c9c9c]'>{item}</span>
            )
          })}
        </div>
        <ListCars />
      </div>
    </div>
  )
}

export default page