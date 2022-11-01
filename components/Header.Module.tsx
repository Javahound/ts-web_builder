
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { FaGithub, FaMailBulk, FaYoutube, FaInternetExplorer } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import React from 'react'

const Header = () => {
    const [nav, setNav] = React.useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    
  return (
    <>
        <nav className="py-2 bg-light border-bottom bg-[#252525]">
            <div className="flex justify-between lg:justify-center items-center w-full h-full px-2 2xl:px-16">
                <ul className=''>
                    <Image src="/ts_logo.png" alt="/" width='75' height='75' className='rounded-half cursor-pointer' />
                </ul>
                <h2 className='cursor-pointer px-4 md:px-0 lg:px-0'>
                    <Link href='/'>
                        <span className="md:hidden lg:flex font-bold text-center mlg:text-xl lg:px-4  text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#576ad2]">TS Website Creator</span>
                    </Link>
                </h2>
                <ul className="hidden md:flex mt-2 px-4 md:px-0">
                    <li className="nav-item"><a href="#" className="xl:px-4 px-2 py-4 rounded-xl hover:bg-[#353535] transition-all ease-in 750ms">Home</a></li>
                    <li className="nav-item"><a href="#" className="xl:px-4 px-2 py-4 rounded-xl hover:bg-[#353535] transition-all ease-in 750ms">Features</a></li>
                    <li className="nav-item"><a href="#" className="xl:px-4 px-2 py-4 rounded-xl hover:bg-[#353535] transition-all ease-in 750ms">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="xl:px-4 px-2 py-4 rounded-xl hover:bg-[#353535] transition-all ease-in 750ms">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="xl:px-4 px-2 py-4 rounded-xl hover:bg-[#353535] transition-all ease-in 750ms">About</a></li>
                </ul>
                <ul className="hidden md:flex mt-2 lg:px-2">
                    {/* <li className="nav-item"><a href="#" className="nav-link link-dark px-1">Login</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-1">Sign up</a></li> */}
                    <li className="px-2 md:px-0"><a href="#" className="px-2 py-4 rounded-xl bg-[#3078c6] hover:bg-[#4b97e9] transition-all ease-in duration-700 min-w-[75px]">Open App</a></li>
                </ul>
                <div onClick={toggleNav} className='md:hidden hover:cursor-pointer'>
                    <AiOutlineMenu size={25} className="mr-2" />
                </div>
            </div>
        </nav>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-0 opacity-100 ease-out duration-500' : 'opacity-0 ease-in duration-500'}>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[85%] sm:w-[65%] md:w-[45%] h-screen bg-[#252525] p-10 ease-in duration-500' : ' fixed left-[-125%] top-0 p-10 ease-in duration-500 w-[85%] sm:w-[65%] md:w-[45%]'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src="/ts_logo.png" alt="/" width='75' height='75' className='rounded-full'></Image>
                        <h2><span className="invisible xs:visible text-base xs:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#576ad2]">TS-Website Creator</span></h2>
                        <div onClick={toggleNav} className='rounded-full shadow-lg shadow-white-900 p-3 cursor-pointer bg-white/10'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <h2 className='mt-8 sm:mt-0'><span className="xs:invisible xxs:visible text-[1.8rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#576ad2]">TS-Website Creator</span></h2>
                    <div className='border-b border-white-400 my-4'>
                        <p className='w-[100%] py-4 text-lg font-semibold  text-center'>Create Static sites with ease.</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <ul className='flex flex-col justify-between uppercase'>
                        <Link legacyBehavior href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link legacyBehavior href='/#about'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Features</li>
                        </Link>
                        <Link legacyBehavior href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Pricing</li>
                        </Link>
                        {/* <Link legacyBehavior href='/projects'>
                            <li onClick={toggleNav} className='py-4 text-sm'>FAQs</li>
                        </Link> */}
                        <Link legacyBehavior href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>About</li>
                        </Link>
                    </ul>
                    <hr className='py-2'/>
                    <ul className='flex flex-col justify-between uppercase'>
                        <Link legacyBehavior href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Login</li>
                        </Link>
                        <Link legacyBehavior href='/#about'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Sign up</li>
                        </Link>
                    </ul>
                    <div className='pt-6 sm:pt-10'>
                        <p  className='font-bold tracking-widest text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Let&apos;s Connect</p>
                        <div className='flex items-center justify-between mt-4 w-[100%] sm:w-[100%] md:w-[60%] lg:w-[25%] sm:pl-12 sm:pr-12'>
                            <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                <Link legacyBehavior href="https://github.com/javahound" passHref><a target="_blank"><FaGithub /></a></Link>
                            </div>
                            <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                <Link legacyBehavior href="https://www.youtube.com/channel/UCSVnpu3ySkQsOQPb50qrQyg" passHref><a target="_blank"><FaYoutube /></a></Link>
                            </div>
                            <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                <Link legacyBehavior href="https://javahound.site" passHref><a target="_blank"><FaInternetExplorer /></a></Link>
                            </div>
                            <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                <Link legacyBehavior href="mailto:contact@mail.javahound.site" passHref><a target="_blank"><FaMailBulk /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header