import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-6 gap-4 bg-gray-100 dark:bg-gray-800 lg:px-40 md:px-50 p-0 pb-20'>
        <div className='col-start-2 col-span-4'>
            <div className='p-5 pt-20'>
                <h1 className='text-2xl font-bold text-gray-600 dark:text-gray-100'>Contact me</h1>
            </div>
            <div className=''>
                <form>
                    <div className='p-2'>
                        <input className='w-full px-6 p-2 rounded-md shadow-xl' type="text" name="first-name" placeholder="First Name"></input>
                    </div>
                    <div className='p-2'>
                        <input className='w-full px-6 p-2 rounded-md shadow-xl' type="text" name="first-name" placeholder="E-mail"></input>
                    </div>
                    <div className='p-2'>
                        <button className='bg-gray-600 text-white px-5 py-2 rounded-md transition duration-700 ease-out transform hover:scale-125 font-semibold' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default About
