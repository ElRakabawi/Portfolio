import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const title = "Let's Breack the Ice"
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <p className='section__subtitle'>{title}</p>
      <p className='ice__text'>
        To help break the ice, this is me in 2018 talking about Octopeth, a
        desktop store for decentralized applications discovery through
        IPFS-hosted apps. [In Arabic]
      </p>
      <div className='iframe-container'>
        <iframe
          className='responsive-iframe'
          style={{ marginBottom: 25 }}
          src='https://www.youtube-nocookie.com/embed/0ffmgddu21I'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>

      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
