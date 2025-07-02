'use client'
import MenuNavbar from '@/components/navigation/MenuNavbar';
import PaymentCard from '@/components/payment/PaymentCard';
import { car, CarsProps } from '@/utils/constants/data';
import { toIDR } from '@/utils/formats/formatCurrency';
import { Armchair, ChevronDownIcon, Cog } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

const CarCheckout = ({ params }: { params: { id: string } }) => {

    const [lengthCode, setLengthCode] = useState('');
    const [isPayment, setIsPayment] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const [data, setData] = useState<CarsProps | null>(null);
    const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
    const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    useEffect(() => {
        const findItem = car.filter((x: any) => x.id == params.id);
        setData(findItem[0]);
    }, [params.id]);

    return (
        <div className='p-5 bg-dark'>
            <MenuNavbar text='Checkout' isDark={true} />
            {data && (
                <>
                    <div className='border border-lightdark rounded-lg flex items-center gap-3 p-4'>
                        <Image src={data.image} width={80} height={80} alt='Car' className='rounded-lg' />
                        <div>
                            <h1 className='text-white font-bold'>{data.name}</h1>
                            <span className='flex items-center gap-1 text-xs text-[#d5d5d5]'><Cog className='w-4 h-4' /> {data.transmission} <Armchair className='w-4 h-4 ml-3' /> {data.seat_capacity} Person</span>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h1 className="text-md mt-1 mb-2 text-primer font-bold">
                            Date
                        </h1>
                        <div className='flex items-center justify-center gap-3 w-full'>
                            <Popover open={open} onOpenChange={setOpen}>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1 className='text-white text-xs'>Pickup Date</h1>
                                    <PopoverTrigger asChild>
                                        <button
                                            id="date"
                                            className=" justify-between font-normal text-white flex items-center p-2 border border-lightdark rounded-lg text-xs"
                                        >
                                            {pickupDate ? pickupDate.toLocaleDateString() : "Select"}
                                            <ChevronDownIcon className='w-4 h-4' />
                                        </button>
                                    </PopoverTrigger>
                                </div>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={pickupDate}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setPickupDate(date);
                                            setOpen(false);
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                            <Popover open={open1} onOpenChange={setOpen1}>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1 className='text-white text-xs'>Return Date</h1>
                                    <PopoverTrigger asChild>
                                        <button
                                            id="date"
                                            className="w-full justify-between font-normal text-white flex items-center p-2 border border-lightdark rounded-lg text-xs"
                                        >
                                            {returnDate ? returnDate.toLocaleDateString() : "Select"}
                                            <ChevronDownIcon className='w-4 h-4' />
                                        </button>
                                    </PopoverTrigger>
                                </div>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={returnDate}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setReturnDate(date);
                                            setOpen(false);
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <h1 className="text-md mt-1 mb-2 text-primer font-bold">
                        Price Action
                    </h1>
                    <div className="flex flex-col gap-2">
                        <div
                            onClick={() => {
                                setIsPayment(true);
                                setLengthCode('H');
                                setTimeout(() => {
                                    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="border border-lightdark p-3 flex flex-col items-start justify-around gap-2 shadow-md rounded-md hover:bg-semidark transition-all cursor-pointer"
                        >
                            <div>
                                <h1 className="text-primer font-extrabold">Hourly</h1>
                                <h1 className="text-sm font-bold text-white">
                                    {toIDR(data.hourly_price)}
                                </h1>
                            </div>
                            <h1 className="text-xs text-lightdark">
                                Overtime: {toIDR(data.hourly_price)}
                            </h1>
                        </div>
                        <div
                            onClick={() => {
                                setIsPayment(true);
                                setLengthCode('D');
                                setTimeout(() => {
                                    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="border border-lightdark p-3 flex flex-col items-start justify-around gap-2 shadow-md rounded-md  hover:bg-semidark transition-all cursor-pointer"
                        >
                            <div>
                                <h1 className="text-primer font-extrabold">Day</h1>
                                <h1 className="text-sm font-bold text-white">{toIDR(data.daily_price)}</h1>
                            </div>
                            <h1 className="text-xs text-lightdark">
                                Overtime: {toIDR(data.daily_overtime_price)}
                            </h1>
                        </div>
                    </div>

                    <div ref={chatEndRef} hidden={!isPayment}>
                        <PaymentCard lengthCode={lengthCode} data={data} />
                    </div>
                </>
            )
            }

        </div >
    )
}

export default CarCheckout