import React from 'react'

import { tagType, thirdweb } from '../assets'
import {daysLeft} from '../utils';


const Fundcard = ({owner, title, description, target, deadline, amountCollected, image, handleClick}) => {
  const remainingDays = daysLeft(deadline);
    return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
       <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]" />
       
       <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
            <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain" />
            <p className="ml-[12px] mt-[20px] font-epilogue font-medium text-[12px] text-[#808191]">
                Education
                {/*Can alter it and make it dynamic, include this in your smart contract */}
            </p>
        </div>
        <div className="block">

        </div>

       </div>
    </div>
  )
}

export default Fundcard