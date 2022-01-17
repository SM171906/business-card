import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import  '../Images/My-image.png';


const Info = () => {
  return (
  <div>
    <img src='../Images/My-image.png' />
      <h3 className='info-name'>Smiti Mishra</h3>
      <h4 className='info-work'>Frontend Developer</h4>
      <h6 className='info-mail'>smiti.hota@gmail.com</h6>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com" target="_blank"> 
      <Button> <FontAwesomeIcon icon={faEnvelope} size="1x" /> Email </Button>
      </a>
      <a href="https://www.linkedin.com/in/smitimishra/" target="_blank">
      <Button> <FontAwesomeIcon icon={faLinkedin} size="1x" />Linkedin</Button>
      </a>
    </div>
  )
}

export default Info
