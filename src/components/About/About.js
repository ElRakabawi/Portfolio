import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { firstName, lastName, role, description, resume, social } = about

  return (
    <div className='about center'>
      {firstName && (
        <h1 style={{ fontWeight: '900' }}>
          Hi, I am <span className='about__name'>{lastName}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <div className='about__desc'>{description && description}</div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                style={{ 'verticalAlign': 'middle' }}
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                style={{ 'verticalAlign': 'middle' }}
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
