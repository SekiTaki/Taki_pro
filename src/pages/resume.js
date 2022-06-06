import React from 'react'
import '../css/style.css';
import myLogo from '../img/IMG_6465.jpg';
import { MdPhoneIphone, MdEmail } from "react-icons/md";

const Resume = () => {
    return (
        <div className='bg-white border rounded-lg overflow-hidden'>
            <img className='h-32 w-full object-cover' src={myLogo}></img>

        </div>
    )
}

export default Resume
{/**<figure className='dark:bg-gray-800 m-10 sm:m-40 bg-white rounded-xl'>
            <div className='px-10 sm:px-20'>
                <div className='p-10 sm:p-20 px-0 sm:px-20'>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='justify-self-end float-right'>
                            <img className='rounded-full w-40' src={myLogo}>
                            </img>
                        </div>
                        <div className='col-span-2 sm:pl-10 pl-0'>
                            <p className='text-2xl sm:text-5xl font-bold tracking-wide'>Taki Kwan</p>
                            <p className='text-sm sm:text-2xl tracking-wide resume_color'>Front End Web Developer</p>
                            <div className="grid grid-cols-9 gap-4">
                                <div className=''>
                                    <span><i className='float-left pt-1 resume_color'><MdPhoneIphone /></i></span>
                                </div>
                                <div className=' col-span-2 '>
                                    <p className='float-left tracking-wide font-light'>55058283</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-9 gap-4">
                                <div className=''>
                                    <span><i className='float-left pt-1 resume_color'><MdEmail /></i></span>
                                </div>
                                <div className='col-span-2 '>
                                    <p className='float-left tracking-wide font-light'>beetles1994klw@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-10 pt-20">
                        <div className='text-2xl font-medium tracking-wide'>
                            <p>CAREER</p>
                        </div>
                        <div className=' col-span-2 '>
                            <p className='float-left tracking-wide font-light resume_line'></p>
                        </div>
                    </div>
                </div>
            </div>
        </figure> */}