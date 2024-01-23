import React from 'react'
import { Card, Col ,Row} from 'react-bootstrap'
import projectImg from '../Assets/musicplayer.png'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card onClick={handleShow} style={{ width: '18rem' }} className='rounded border shadow'>
      <Card.Img variant="top" src={projectImg} />
      <Card.Body>
        <Card.Title>ProjectTitle</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col sm={12} md={6}>
            <img src={projectImg} alt="img" className='image-fluid'/>
          </Col>
<Col sm={12} md={6}>
  <h5>Project title</h5>
  <p>Media Player is a Universa Video Player for Android, you can easily play any video files with the media player. 
    The Media Player can handle all popular video and music formats including: mp3, mp4, wmv, avi, mkv, dv, rm, mp, mpeg ect.
and show format converting of videos. With the media player,</p>
<p><span className='fa-bold'>Languages Used : </span> HTML,CSS,JS</p>
<div>
  <a target='_blank' className='btn me-2' href="https://github.com/lubnasuhail/musicplayer.git">
<i class="fa-brands fa-github fa-2x"></i>
  </a>

  <a target='_blank' className='btn' href="">
<i class="fa-solid fa-link fa-2x"></i>
  </a>
</div>
</Col>

        </Row>
        </Modal.Body>
        
        </Modal>
    </>
  )
}

export default Projectcard