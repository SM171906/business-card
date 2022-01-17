import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/SM171906"
        className="github">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      <a href="https://www.facebook.com/smiti.mishrahota/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.instagram.com/mishrasmiti06/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  )
}

export default Footer
