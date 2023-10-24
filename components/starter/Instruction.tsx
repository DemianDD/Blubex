'use client'
import { benefits_examples, instructions, website_examples } from '@/data/website_samples'
import React, { useEffect, useState } from 'react'
import InstructionGoogle from './html/instruction_google';
import Devices from './html/devices';
import Slider from '../slider/Slider';

const Instruction = () => {

  return (
    <div className='flex flex-col w-full p-0 md:p-[100px] items-center'>
        <div className='text-[35px] font-medium mb-[100px] text-center px-5 md:px-0'><span className='text-indigo-500'>Blubex</span> - you dream, we create</div>
        <div className='flex w-full justify-center items-center gap-5 flex-col md:flex-row'>
            {instructions.map((i, id) => {
                return(
                    <div className='w-[335px] md:w-[350px] h-[450px] flex flex-col items-center justify-center rounded-3xl p-10' key={id}>
                        <div className=''>
                            <img
                                src={i.image}
                                className='h-[200px] mb-5 drop-shadow-xl shadow-[#acacac] flex-1'
                            />
                        </div>
                        <div className='text-center'>
                            <div className='mr-1 text-[#232323] font-[300] mb-3 p-3 bg-white rounded-3xl'>{i.name}</div>
                            <div className='text-[10px] sm:text-xs text-[#fff]'>{i.text}</div>
                        </div>
                    </div>
                )
            })}
        </div>

        <InstructionGoogle/>

        <div className='text-xl sm:text-[35px] mb-[80px] text-center px-5 md:px-0 font-[300]'>
            <div className='p-2 m-5 sm:p-5 bg-white text-[#232323] rounded-full'>Our experience</div>
            <p className='text-lg md:text-[20px] text-[#6a6a6a]'>From E-Commerce and Crypto to Wedding websites and more...</p>
        </div>
        <Slider/>
        <div className=' text-[25px] md:text-[40px] my-[100px] text-center w-full md:w-1/2 px-5 md:px-0'>
            <div className='font-medium mb-5'>If your <span className='text-indigo-500'>business</span> is not on the Internet, then your business will be out of <span className='text-indigo-500'>business</span>.</div>
            <div className='text-lg md:text-[20px] text-[#6a6a6a]'>Blubex offers you powerful tools to start and grow your business online</div>
        </div>

        <div className='bg-white rounded-xl p-5'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 relative mb-[40px]'>
                {benefits_examples.map((b, id) => {
                    return(
                        <div key={id} className='p-[25px]'>
                            <div className='h-[250px]'>
                                <div className='text-[#cacaca] text-xl font-[300] mb-5'>{b.category}</div>
                                <div className='text-[#232323] text-[40px] font-[400] mb-1'>{b.title}</div>
                                <div className='text-[#6a6a6a] text-base font-[300]'>{b.subtitle}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Devices/>
        </div>
    </div>
  )
}

export default Instruction