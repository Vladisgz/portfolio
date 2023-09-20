import React from 'react'
import Title from './Title'
import {GiSkills} from 'react-icons/gi'
import SkillsInput from './SkillsInput'

const Skills = () => {
  return (
    <div className='wrapper'>
        <Title text='Навыки' icon={<GiSkills/>}/>
        <div className='flex gap-4 flex-wrap'>
            <SkillsInput title='JavaScript' link='https://developer.mozilla.org/ru/docs/Web/JavaScript'/>
            <SkillsInput title='HTML5' link='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'/>
            <SkillsInput title='CSS3' link='https://developer.mozilla.org/en-US/docs/Web/CSS'/>
            <SkillsInput title='ReactJS' link='https://react.dev/'/>
            <SkillsInput title='Typescript' link='https://www.typescriptlang.org/'/>
            <SkillsInput title='Tailwindcss' link='https://tailwindcss.com/'/>
            <SkillsInput title='NextJS' link='https://nextjs.org/'/>
            <SkillsInput title='NodeJS' link='https://nodejs.org/en'/>
            <SkillsInput title='MongoDB' link='https://www.mongodb.com/'/>
            <SkillsInput title='VS Code' link='https://code.visualstudio.com/'/>
            <SkillsInput title='Adobe Photoshop' link='https://www.adobe.com/ru/products/photoshop.html'/>
            <SkillsInput title='Figma' link='https://www.figma.com/'/>
        </div>
    </div>
  )
}

export default Skills