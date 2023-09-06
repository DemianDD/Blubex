'use client'
import { benefits_examples, instructions, website_examples } from '@/data/website_samples'
import React, { useEffect, useState } from 'react'
import Devices from '../blocks/template_blocks_html/devices';

const Instruction = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
            const translateAmount = scrollDirection === 'down' ? -25 : 25;
            
            document.querySelectorAll('.scrolling-photo').forEach(photo => {
                const photoElement = photo as HTMLElement;
                photoElement.style.transform = `translateX(${translateAmount}px)`;
            });
        
            setPrevScrollPos(currentScrollPos);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

  return (
    <div className='flex flex-col w-full h-screen p-[100px] items-center'>
        <div className='text-[35px] font-medium mb-[100px]'><span className='text-indigo-500'>Blubex</span> - you dream, we create</div>
        <div className='flex w-full justify-between'>
            {instructions.map((i, id) => {
                return(
                    <div className='w-[350px] mr-5' key={id}>
                        <div>
                            <img
                                src={i.image}
                                className='w-[200px] flex-1 mb-5'
                            />
                        </div>
                        <div className='text-lg'>
                            <span className='mr-1 text-indigo-500 font-[300]'>{i.name}</span>
                            <span>{i.text}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='text-[45px] my-[80px] text-center'>
            Our experience
            <p className='text-[20px] text-[#6a6a6a]'>From E-Commerce and Crypto to Healthy Blogs and more...</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 duration-300 scrolling-photo'>
            {website_examples.map((w, id) => (
                <div className='bg-[#111111] p-1 rounded-lg h-[200px] object-cover' key={id}>
                    <img
                        src={w.image}
                        className='w-full object-cover h-full rounded-lg'
                    />
                </div>
            ))}
        </div>
        <div className='text-[40px] my-[100px] text-center w-1/2'>
            <div className='font-medium mb-5'>If your <span className='text-indigo-500'>business</span> is not on the Internet, then your business will be out of <span className='text-indigo-500'>business</span>.</div>
            <div className='text-[20px] text-[#6a6a6a]'>Blubex offers you powerful tools to start and grow your business online</div>
        </div>

        <div className='bg-white rounded-xl p-5 mb-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative mb-[40px]'>
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