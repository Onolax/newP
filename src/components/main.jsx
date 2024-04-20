import React from 'react'
import { ReactTyped } from 'react-typed';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Main() {
    return (
        <div>
            <img className='w-full h-screen opacity-80' src="https://i.natgeofe.com/n/cda6eab8-3814-44b8-8b0c-5f9c55f84e0f/tpc18-outdoor-gallery-436041-12037328_07_3x4.jpg" alt="Image" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[1080px] m-auto h-full w-full flex flex-col justify-center  items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jiya</h1>
                    <p className='flex sm:text-3xl text-2xl pt-4 pl-4 text-gray-800'> I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                " Girlfiend",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                " Data Analyst",
                                1000,
                                " Dancer",
                                1500,
                                " Painist",
                                1500
                            ]}
                            wrapper="p"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '7px' }}
                            repeat={Infinity}
                        />
                    </p>
                    <div className='flex pt-4 justify-between max-w-[200px] w-full'>
                        <FaInstagram className='cursor-pointer m-4' size={40} />
                        <FaGithub className='cursor-pointer m-4' size={40} />
                        <FaLinkedin className='cursor-pointer m-4' size={40} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main