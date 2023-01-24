import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedial = () => {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
  )
}

export default SocialMedial