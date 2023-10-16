'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Anime from '../components/Anime.jsx';

export default function Home() {

    return (
        <div className="relative mx-auto h-screen w-screen bg-gray-100">

            {/* Navbar */}
            <nav className="fixed w-screen mt-0 top-0 mx-auto px-6 bg-gray-300">

                {/* Flex Container */}
                <div className="flex w-screen items-center justify-between rounded-3xl px-4 pb-2 -mx-4">

                    {/* Logo */}
                    <div className="flex space-x-6 mt-4 md:ml-24 ml-8">
                        <div>
                            <Image className='rounded-full w-24 flex h-24' alt="Logo goes here" />
                        </div>
                        <div className='text-2xl font-serif'>
                            <h1>LARKS TECH HUB</h1>
                        </div>
                    </div>

                    {/* Menue Items */}
                    <div className="hidden text-lg font-medium font-serif space-x-10 items-center md:mr-20 md:flex">                        
                        <Link href="/" className='text-brightRed'>Home</Link>                        
                        <Link href="/articles" className='hover:text-brightRed'>Company</Link>                        
                        <Link href="/events" className='hover:text-brightRed'>Services</Link>
                        <Link href="/gallery" className='hover:text-brightRed'>Projects</Link>
                        <Link href="/media" className='hover:text-brightRed'>Contact Us</Link>
                        
                    </div>

                    {/* Hamburger Icon */}
                    <button id="menu-btn" onClick={Anime} className="block hamburger md:hidden outline-none mr-2">
                       <span className="hamburger-top"></span> 
                       <span className="hamburger-middle"></span> 
                       <span className="hamburger-bottom"></span> 
                    </button>
                </div>

                {/* Mobile Menue */}
                <div className="md:hidden">
                    <div id="menu" className="absolute flex-col items-center 
                    self-end hidden rounded-3xl py-4 mt-2 space-y-2 font-bold 
                    bg-gray-300 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">                        
                        <Link href="/" className='text-brightRed'>Home</Link>                                        
                        <Link href="/articles" className='hover:text-brightRed'>Company</Link>                                        
                        <Link href="/events" className='hover:text-brightRed'>Services</Link>                      
                        <Link href="/gallery" className='hover:text-brightRed'>Projects</Link>                      
                        <Link href="/media" className='hover:text-brightRed'>Contact Us</Link>                      
                    </div>
                </div>
            </nav>

            {/* Footer */}
            <footer className="bg-gray-800 mb-0 w-screen pr-16 md:pr-0 mx-auto">               

                {/* Flex Section */}
                <div className="flex w-screen flex-col-reverse justify-between px-6 py-10 my-4 space-y-8 md:mr-40 md:flex-row md:space-y-0">

                    {/* Logo */}
                    <div className="flex justify-center ml-16 mt-8 md:mt-0 md:space-y-0 md:ml-6">
                        <div>
                            <Image className='rounded-full w-48 h-48 border-white flex items-center md:ml-16' alt="Logo goes here" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-amber-700 pb-4 ml-20 md:ml-0">
                    Copyright &copy;Larks Tech Hub 2023, All Rights Reserved
                </div>
            </footer>
        </div>
    )
}
