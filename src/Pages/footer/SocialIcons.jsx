import React from 'react'

const SocialIcons = ({ Icons }) => {
  
  return (
    <div className='text-teal-500'>
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 '
        >
          {/* <ion-icon name={icon.icon}></ion-icon> */}
          {
            icon.icon === 'FaGithub' ? () => <FaGithub /> : icon.icon === 'FaFacebookF' ? () => <FaFacebookF /> : icon.icon === 'FaTwitter' ? () => <FaTwitter /> : icon.icon === 'FaInstagram' ? () => <FaInstagram /> : icon.icon === 'FaLinkedinIn' ? () => <FaLinkedinIn /> : null
          }
        </span>
      ))}
    </div>
  )
}

export default SocialIcons
