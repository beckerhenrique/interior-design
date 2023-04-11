import React from 'react'
import { Link } from 'react-router-dom'

import './CardServices.css'

function CardServices({URLimg, title, description, pageTo}) {
  return (
    <Link to={pageTo}>
    <div className='cardServices'>
      <img src={URLimg} className="imgCard"/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div></Link>
  )
}

export default CardServices