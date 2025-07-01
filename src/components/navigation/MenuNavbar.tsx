import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';

interface MenuNavbarProps {
    text: string;
    isDark?: boolean;
}

const MenuNavbar = ({ text, isDark }: MenuNavbarProps) => {

    const router = useRouter();

    return (
        <div className={`${isDark ? 'text-white' : 'text-black'} flex items-center justify-between pb-7`}>
            <div className='flex items-center gap-3'>
                <ArrowLeft
                    onClick={() => {
                        router.back();
                    }}
                    className='w-5 h-5 cursor-pointer' />
                <h1 className='font-bold'>{text}</h1>
            </div>
            <HamburgerMenu />
        </div>
    )
}

export default MenuNavbar