import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <div className=" d-flex flex-column"> 
    <h2 className='text-center'>CONTACT ME</h2>
    <div className="contact">
      <div className='row'>
    <div className='contactDetails' >
    {/* <div><FontAwesomeIcon icon={faLocationDot} /> <span> Kolkata,WestBengal</span></div>
    <div> <FontAwesomeIcon icon={faPhone} /><span>9874184082</span></div> */}
   <a href="mailto: anuskamitra2001@gmail.com"  className="link" > <button  type="button" className="btn btn-outline-danger me-5"> <FontAwesomeIcon className='icon' color="#dc4c64" icon={faEnvelope} size="lg"/> <span >Email me</span></button></a>
    <a href=" https://www.linkedin.com/in/anuska-mitra-43568820a/" target="_blank" className="link"><button type="button" className='btn btn-outline-primary me-5'>
      <FontAwesomeIcon size="lg"  icon={faLinkedin} className="icon" /> <span>LinkedIn</span>
    </button></a> 
    <a href="https://github.com/anuskamitra" target="_blank" className="link" >  <button type="button" className='btn btn-outline-dark me-5'> <FontAwesomeIcon className="icon" icon={faGithub} size="lg" color="black"/> <span >Github</span></button></a>
   
    <a href="https://facebook.com"  target="_blank" className="link"> <button type="button" className='btn btn-outline-primary me-5'> <FontAwesomeIcon size="lg" className="icon" icon={faFacebook}/> <span >Facebook</span></button></a>
    </div>
    </div>
    </div>
    </div>
    
   
  )
}

export default Contact