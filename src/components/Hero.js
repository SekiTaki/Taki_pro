import React, { Component } from 'react';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap, DiIllustrator, DiJqueryLogo, DiPhotoshop } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default class hero extends Component {
    render() {
        return (
            <header className='bg-gray-100 dark:bg-gray-800'>
                <div className='w-full md:p-10 pl-0 md:text-center text-left font-mono'>
                    <div>
                        <div className='p-10 pb-0 text-xl text-gray-500 '>
                            <h1>Hi, i am</h1>
                        </div>
                        <div className='p-10 sm:text-9xl pb-0 text-7xl tracking-wider font-bold font-sans text-gray-400' data-aos="fade-up" data-aos-duration="3000">
                            <h1>Taki KWAN</h1>
                        </div>
                        <div className='px-10 pt-0 pb-0 text-xl text-gray-500 font-sans tracking-wider'>
                            <p>Welcome to my digital home</p>
                        </div>
                        <div className='marquee p-10'>
                            <ul className="marquee-content">
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiHtml5 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiCss3 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJavascript /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiReact /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><SiTailwindcss /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiBootstrap /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJqueryLogo /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiPhotoshop /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiIllustrator /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiHtml5 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiCss3 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJavascript /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiReact /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><SiTailwindcss /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiBootstrap /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJqueryLogo /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiPhotoshop /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiIllustrator /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiHtml5 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiCss3 /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJavascript /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiReact /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><SiTailwindcss /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiBootstrap /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiJqueryLogo /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiPhotoshop /></i></li>
                                <li className='text-5xl text-gray-300 dark:text-gray-700'><i><DiIllustrator /></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}