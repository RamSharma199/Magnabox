import React from 'react'

export const BaseInput = ({ title, placeholder, userIcon, star,arrow ,type }) => {
    return (
        <div>
            <div className='mt-5'>
            <div className='flex'>
                <label htmlFor="" className='text-sm font-semibold'>{title}</label>
                <img src={star} alt="" className='w-[19px] h-[10px]' />
            </div>
                <div className='relative focus'>
                    <div className='flex items-center'>
                    <img src={userIcon} alt="" className='mx-5 w-[15px] h-[14px] sm:w-[22px] sm:h-[22px]' />
                    <input type={type} name=""  id="" className='w-full px-5 py-2 sm:py-3 focus:outline-none rounded-xl  type' placeholder={placeholder} />
                    </div>
                    <img src={arrow} alt="" className='absolute top-3 right-5' />
                </div>
                </div>
        </div>
    )
}
