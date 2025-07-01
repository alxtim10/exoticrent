import PaymentCard from '@/components/payment/PaymentCard';
import { car } from '@/utils/constants/data';
import { toIDR } from '@/utils/formats/formatCurrency';
import React, { useEffect, useRef, useState } from 'react'

const CarCheckout = ({ params }: { params: { id: string }}) => {

    const [lengthCode, setLengthCode] = useState('');
    const [isPayment, setIsPayment] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const findItem = car.filter((x: any) => x.id == params.id);
        setData(findItem[0]);
    }, [params.id]);

    return (
        <div>
            <h1 className="text-md mt-1 mb-2 text-gray-600 font-bold">
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
                    className="bg-white p-3 flex flex-col items-start justify-around gap-3 shadow-md rounded-md hover:bg-gray-200 transition-all cursor-pointer"
                >
                    <div>
                        <h1 className="text-blue-700 font-extrabold">Hourly</h1>
                        <h1 className="text-sm font-bold">
                            {toIDR(data.hourly_price)}
                        </h1>
                    </div>
                    <h1 className="text-xs text-slate-500">
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
                    className="bg-white p-3 flex flex-col items-start justify-around gap-3 shadow-md rounded-md  hover:bg-gray-200 transition-all cursor-pointer"
                >
                    <div>
                        <h1 className="text-blue-700 font-extrabold">Day</h1>
                        <h1 className="text-sm font-bold">{toIDR(data.daily_price)}</h1>
                    </div>
                    <h1 className="text-xs text-slate-500">
                        Overtime: {toIDR(data.daily_overtime_price)}
                    </h1>
                </div>
            </div>

            <div ref={chatEndRef} hidden={!isPayment}>
                <PaymentCard lengthCode={lengthCode} data={data} />
            </div>
        </div>
    )
}

export default CarCheckout