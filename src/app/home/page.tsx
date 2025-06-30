'use client'
import ListCars from '@/components/rent/ListCars'
import { car, CarsProps, CategoryProps, listCategory } from '@/utils/constants/data'
import { User } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [listCar, setListCar] = useState<CarsProps[]>(car);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [query, setQuery] = useState<string>('');

  const filterCategory = (id: number | null) => {
    if (id !== null) {
      let filteredCars = car.filter((item) => item.category_id == id);
      setListCar(filteredCars);
    } else {
      setListCar(car);
    }
  }

  useEffect(() => {
    if (query.trim() === '') {
      setListCar(car);
    } else {
      const filteredCars = car.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
      setListCar(filteredCars);
    }
  }, [query])

  return (
    <div>
      <div className='flex items-center gap-2 px-5 pt-5'>
        <User className='bg-primer text-white rounded-full h-10 w-10 p-2'></User>
        <div className='flex flex-col'>
          <h1 className='text-xs text-[#6e6e6e]'>Your Location</h1>
          <h1 className='text-sm'>Pasar Minggu, Jakarta Selatan</h1>
        </div>
      </div>
      <div className='px-12'>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder='Find your whip'
          className='border border-[#cfcfcf] rounded-full w-full h-14 translate-y-8 shadow-md px-5 focus:outline-0'
          type="text" name="" id="" />
      </div>
      <div className='bg-[#ededed] border rounded-t-[60px] px-5 py-10'>
        <h1 className='text-lg font-semibold mt-1'>Categories</h1>
        <div className='flex items-center gap-3 my-2'>
          {listCategory.map((item: CategoryProps, i: number) => {
            return (
              <span key={i}
                onClick={() => {
                  filterCategory(item.id !== null ? item.id : null);
                  setActiveCategory(item.id)
                }}
                className={`${activeCategory == item.id ? 'bg-black text-white' : 'bg-white text-[#9c9c9c] border'} cursor-pointer px-3 py-1 rounded-2xl text-sm`}>{item.category}</span>
            )
          })}
        </div>
        <ListCars data={listCar} />
      </div>
    </div>
  )
}

export default page