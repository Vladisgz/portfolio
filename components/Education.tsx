import React from 'react'
import Title from './Title'
import {IoSchoolSharp} from 'react-icons/io5'
import {FaUniversity} from 'react-icons/fa'
import EducationCard from './EducationCard'


const Education = () => {
  return (
    <div className='wrapper'>
        <Title text='Образование' icon={<IoSchoolSharp/>}/>
        <div>
            <EducationCard title='Самарский Государственный Технический Университет' subTitle='Факультет Автоматики и Информационных Технологий (Магистр)' yearEd='2010 - 2016' icon={<FaUniversity/>}/>
        </div>
    </div>
  )
}

export default Education