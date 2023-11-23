import React from 'react'
import logo from "../images/3sigma-logo.png"
import select from "../images/select.png"
import arrow from "../images/downArrow.png"

export const Header = () => {
    return (
        <div>
            <header className='flex flex-col items-center sm:flex-row sm:justify-between pt-5 '>
                <h1 className='company-name'>Magnabox Private limited </h1>
                <img src={logo} alt=" not found" className='w-[168px] h-[75px]' />
            </header>
        </div>
    )
}

export const Select = ({title ,option1, option2, option3}) => {
    return (
        <div>
             <div className='mt-5'>
                        <label htmlFor="" className='text-sm font-semibold  '>{title}</label>
                        <div className='focus'>
                            <img src={select} alt="" className='absolute left-5 top-[30%]' />
                            <select name="" id="" className='appearance-none w-full pl-20 py-2  outline-none rounded-md '>
                                <option value={option1}>{option1}</option>
                                <option value={option2}>{option2}</option>
                                <option value={option3}>{option3}</option>
                                </select>
                            <img src={arrow} alt="" className='absolute right-5 h-[20px] top-[30%]' />
                        </div>
                    </div>
      
        </div>
    )
}


