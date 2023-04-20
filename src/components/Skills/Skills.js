import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>My Tech Stack</h2>
      <p className='section__subtitle'>Skills I have acquired</p>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item skill-box'>
            <div className='skills-img'>
              <img alt={Object.keys(skill)} width={50} src={Object.values(skill)} />
            </div>
            <div className='skills-text'>
              {Object.keys(skill)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
