import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { useState } from 'react'

const ProjectContainer = ({ project }) => {
  const [hoveredEle, setHoveredEle] = useState('')

  const hoverEle = (e, projectName) => { 
    setHoveredEle(projectName)
  }

  return (
  <div onMouseEnter={e => hoverEle(e, project.name)} onMouseLeave={e => hoverEle(e, '')}>
    {/* { hoveredEle === project.name ? ( */}
      <div className='project' style={{backgroundColor: project.color}}>
        <img className={hoveredEle === project.name ? 'hideOp project__image' : 'displayOp project__image'} src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className={hoveredEle === project.name ? 'displayOp link link--icon' : 'hideOp link link--icon'}
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className={hoveredEle === project.name ? 'displayOp link link--icon' : 'hideOp link link--icon'}
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    {/* // ) : (
    //   <div className='projectHovered'>
    //     <img src={project.image} alt={project.name} className='project__image' />
    //   </div>
    // )} */}
  </div>
  )
}

export default ProjectContainer
