'use client';
import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { cn } from '../../lib/utils';
import { SheetClose } from './sheet';

const Sidebar = ({ user }: SiderbarProps) => {

    const pathName = usePathname();

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href = '/' className='mb-12 flex cursor-pointer items-center gap-2'>
                <Image src = '/icons/logo.svg' width={34} height={34} alt='Horizon logo' className='size-[24px] max-xl:size-24'>   
                </Image>
                <h1 className='sidebar-logo'>Horizon</h1> 
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                return <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient' : isActive})}>
                    
                        <Image width={20} height={20} src={item.imgURL} alt = {item.label} fill className = {cn({
                            'brightness-[3] invert-0': isActive})} />
                    
                        <p className={cn('text-16 font-semibold text-black-2', {'text-white' : isActive})}>
                            {item.label}
                        </p>
                </Link>
            })}
        </nav>
    </section>
  )
}

export default Sidebar;