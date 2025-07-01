'use client'
import HamburgerMenu from '@/components/hamburger-menu/HamburgerMenu'
import ListCars from '@/components/rent/ListCars'
import { car, CarsProps, CategoryProps, listCategory } from '@/utils/constants/data'
import { ArrowLeft, Map, MapPin, Pin, PinIcon, User } from 'lucide-react'
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
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className='flex items-center gap-3'>
          <ArrowLeft className='w-5 h-5'/>
          <h1 className='font-bold'>Home</h1>
        </div>
        <HamburgerMenu />
      </div>
      <div className='flex items-center gap-2 px-5 pt-5'>
        <MapPin className='bg-primer text-white rounded-full h-9 w-9 p-2'></MapPin>
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
          className='border border-lightdark rounded-full w-full h-14 translate-y-8 shadow-md px-5 focus:outline-0'
          type="text" name="" id="" />
      </div>
      <div className='bg-dark rounded-t-[60px] px-5 py-10 text-white'>
        <h1 className='text-lg font-semibold mt-1'>Categories</h1>
        <div className='flex items-center gap-3 my-2'>
          {listCategory.map((item: CategoryProps, i: number) => {
            return (
              <span key={i}
                onClick={() => {
                  filterCategory(item.id !== null ? item.id : null);
                  setActiveCategory(item.id)
                }}
                className={`${activeCategory == item.id ? 'bg-semidark text-primer border border-primer' : 'bg-[#f2f2f2] text-black border border-lightdark'} cursor-pointer px-3 py-1 rounded-2xl text-xs`}>{item.category}</span>
            )
          })}
        </div>
        <ListCars data={listCar} />
      </div>
    </div>
  )
}

export default page