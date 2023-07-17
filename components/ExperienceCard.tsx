import React, {ReactNode} from 'react'
import {BiLogoReact} from 'react-icons/bi'

interface Props {
	title: string;
  subTitle: string;
	icon: ReactNode;
}

const ExperienceCards = ({title, subTitle, icon}: Props) => {
  return (
    <div className='flex items-center gap-4'>
            <span className='w-12 h-12 rounded-full bg-black border-[1px] border-white flex items-center justify-center'>
                {/* <BiLogoReact className='text-3xl'/> */}
                <span className='text-3xl'>{icon}</span>
                
            </span>
            <div>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-base lg:tracking-wide text-gray-400'>{subTitle}</p>
            </div>
        </div>
  )
}

export default ExperienceCards