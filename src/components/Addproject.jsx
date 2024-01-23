import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addproject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='row'>
<div className='col-lg-6'>
<label htmlFor="project" className='text-center'>
    <input type="file" id='project' style={{display:'none'}}/>
    <img src="https://cdn-icons-png.flaticon.com/512/4503/4503941.png"  alt="image" />
</label>
</div>
<div className='col-lg-6'>
    <input type="text" placeholder='project Title' className='form-control mb-2 rounded'/>
    <input type="text" placeholder='project OverView' className='form-control mb-2 rounded'/>
    <input type="text" placeholder='Languages Used' className='form-control mb-2 rounded'/>
    <input type="text" placeholder='GitHub URL' className='form-control mb-2 rounded'/>
</div>
<input type="text" placeholder='Demo URL' className='form-control mb-2 rounded'/>
            </div>
          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Addproject