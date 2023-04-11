import React from 'react'
import {BsGithub} from 'react-icons/bs'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h2>Brazidesign</h2>
      <BsGithub className='githubIcon'/>
    </div>
  )
}

export default Footer