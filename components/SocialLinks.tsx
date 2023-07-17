import React from 'react'
import {BsBoxArrowInUpRight} from 'react-icons/bs'

interface Props {
	title: string;
	link: string;
}

const SocialLinks = ({title, link}: Props) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='flex items-center justify-center gap-2 text-xl text-grey-400 font-semibold group'>
      <p className='group-hover:text-white group-hover:duration-500'>{title}</p>
      <BsBoxArrowInUpRight className='translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500'/>
    </a>
  )
}

export default SocialLinks