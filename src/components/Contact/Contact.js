import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const title = "Let's Breack the Ice"
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <p className='section__subtitle'>{title}</p>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
