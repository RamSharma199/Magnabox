import React from 'react'
import userIcon from "../images/user.png"
import star from "../images/Star.png"
import address from "../images/address.png"
import email from "../images/email.png"
import phone from "../images/phone.png"
import sale from "../images/salevalue.png"
import date from "../images/date.png"
import time from "../images/Time.png"
import { BaseInput } from '../component/BaseInput'
import { location } from '../../data'
import { Header, Select } from '../component/Common'


export const MagnaboxForm = () => {

    return (
        <div className='bg-[#EBF0F4] w-full h-auto py-5  '>
            <div className='w-[90%]  mx-auto  '>
               <Header/>
                <div className='flex justify-between mt-5 '>
                    <h1 className=' text-[16px] sm:text-[24px] font-semibold text-[#000000] ' >Add new lead form </h1>
                    <button className='base-btn bg-transparent '>Cancel</button>
                </div>
                <form>
                    <BaseInput title="Lead name" placeholder="Enter lead name" userIcon={userIcon} star={star} type="text" />
                    <BaseInput title="Email ID" placeholder="Example@anyemail.com" userIcon={email} star={star} type="email" />
                    <BaseInput title="Phone number" placeholder="+91 8800688763" userIcon={phone} star={star} type="number" />
                    <BaseInput title="Address" placeholder="Gugurgram ,India" userIcon={address} star="" type="text" />
                    <iframe src={location} className='mt-5 w-full h-52'></iframe>
                    <BaseInput title="Sale value" placeholder="50,00,000" userIcon={sale} star="" type="text" />
                    <BaseInput title="Date" placeholder="29 August 2023" userIcon={date} star="" type="date" />
                    <BaseInput title="Time" placeholder="20:21 pm" userIcon={time} star="" type="time" />

                  <Select title="Options" option1="option1" option2="option2" option3="option3"/>
                   <Select title="Product" option1="product1" option2="product2" option3="Product3"/>
                    <div className='mt-5'>
                        <label htmlFor="note" className='text-sm font-semibold'>Note</label>
                        <textarea name="note" id="note" cols="30" rows="5" className='focus pl-20 py-2' placeholder='Enter note'></textarea>
                    </div>
                    <button className='btn-submit'>Add lead</button>
                </form>
            </div>

        </div>
    )
}
