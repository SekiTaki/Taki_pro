import React from 'react';
import '../css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Portfolio = () => {
    return (
        <div className='p-8 text-center'>
            <h1 className='py-10 text-3xl font-bold text-left dark:text-gray-100 text-gray-900'>作品</h1>
            <br></br>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 p-0 sm:p-20 lg:px-30 xl:px-30'>
                <a href="https://salon.shiseido.co.jp/passage_beaute">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img1' data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>Shiseido passage beauté</h3>
                    </div>
                </a>
                <a href="https://yanyanbeauty.com">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img2' data-aos="fade-up" data-aos-duration="2000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>YanYan Beauty</h3>
                    </div>
                </a>
                <a href="https://www.rd3450dc.com">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img3' data-aos="fade-up" data-aos-duration="3000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>Rotary District Conference</h3>
                    </div>
                </a>
            </div>
            <br></br>
            <h1 className='py-10 text-3xl font-bold text-left dark:text-gray-100 text-gray-900'>Developing</h1>
            <br></br>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 p-0 sm:p-20 lg:px-30 xl:px-30'>
                <a href="http://nutcaahk.com">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img4' data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>中科大香港校友會</h3>
                    </div>
                </a>
                <a href="http://rosaheritage.com">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img5' data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>Rosa Heritage</h3>
                    </div>
                </a>
            </div>
            <br></br>
            <h1 className='py-10 text-3xl font-bold text-left dark:text-gray-100 text-gray-900'>Exercise</h1>
            <br></br>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 p-0 sm:p-20 lg:px-30 xl:px-30'>
                <a href="http://thickink.nutcaahk.com">
                    <div className='flex bg-black text-white justify-center items-center rounded-2xl portfolio-img6' data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='sm:text-3xl text-xl sm:p-20 p-8'>ThinkInk</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}
AOS.init();
export default Portfolio
