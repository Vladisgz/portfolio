import React from 'react'
import Title from './Title'
import {MdWorkHistory} from 'react-icons/md'
import {SiFreelancer, SiChinaeasternairlines,SiSparkar} from 'react-icons/si'
import {FcElectronics} from 'react-icons/fc'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className='wrapper'>
			<Title text='Опыт работы' icon={<MdWorkHistory/>}/>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<ExperienceCard title='CTV' subTitle='Chinese Media 2017 - 2019' icon={<SiChinaeasternairlines/>}/>    
					<ExperienceCard title='Freelancer' subTitle='SparkAr Creator 2019-2021 ' icon={<SiSparkar/>}/>    
					<ExperienceCard title='Freelancer' subTitle='Frontend Developer 2020 - Present' icon={<SiFreelancer/>}/>    
					<ExperienceCard title='GSIL' subTitle='Assistant Director 2018-2019' icon={<FcElectronics/>}/>    
			</div>    
    </div>
  )
}

export default Experience
