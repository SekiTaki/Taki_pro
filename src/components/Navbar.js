import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import useDarkMode from './useDarkMode';
import { BsMoon, BsSun } from "react-icons/bs";
import { RiHomeLine, RiBriefcase3Line, RiAccountCircleLine, RiFilePaper2Line } from "react-icons/ri";


export default function Nav() {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className=''>
            <nav className='flex justify-between items-center h-16 text-gray-600 relative z-10 bg-gray-100 dark:bg-gray-800'>
                {/**<Link to='/' className='p-5 md:block hidden'>Taki</Link> */}
                <div className='footerNavColor w-full shadow justify-between py-1 px-8 pt-4 flex fixed bottom-0 sm:hidden dark:bg-gray-900'>
                    <Link to='/'>
                        <button>
                            <i className='dark:text-gray-100 text-2xl'>
                                <RiHomeLine />
                            </i>
                        </button>
                    </Link>
                    <Link to='/portfolio'>
                        <button>
                            <i className='dark:text-gray-100 text-2xl'>
                                <RiBriefcase3Line />
                            </i>
                        </button>
                    </Link>
                    <Link>
                        <button onClick={() => setTheme(colorTheme)}>
                            {colorTheme === 'light' ? (
                                <i className='dark:text-gray-100 text-2xl'><BsSun /></i>) : (
                                    <i className='text-2xl'><BsMoon /></i>)}
                        </button>
                    </Link>
                </div>
                <div className='p-8 sm:block hidden absolute -right-0 dark:text-white text-gray-900'>
                    <Link className='p-4' to='/'>Home</Link>
                    <Link className='p-4' to='/portfolio'>Portfolio</Link>
                    <button onClick={() => setTheme(colorTheme)}>
                        {colorTheme === 'light' ? (
                            <i><BsSun /></i>) : (
                                <i><BsMoon /></i>)}
                    </button>
                </div>
            </nav>
        </div>
    );
}

{


/**import React, { Component } from 'react';

export default class Body extends Component {
    cStyle = {
        container: 'flex justify-center items-center h-screen bg-blue-100',
        card:'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
        title: 'font-bold text-6xl',
        subTitle: 'text-2xl text-blue-400',
    }
    render() {
        return (
            <div className={this.cStyle.container}>
                <div className={this.cStyle.card}>
                    <h1 className={this.cStyle.title}>React App</h1>
                    <h2 className={this.cStyle.subTitle}>Learning React new</h2>
                </div>
            </div>
        );
    }
}

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'>
            <Link to='/' className='p-5 md:block hidden'>Taki</Link>
            <div className="container p-5 flex fixed bottom-0 border-t-2 border-black md:hidden">
                <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
            <div className='p-8 md:block hidden'>
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/'>Home</Link>
            </div>
        </nav>
        )
    }

export default Navbar;
*/}