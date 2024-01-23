import React from 'react'
import Addproject from './Addproject'

function Myprojects() {
  return (
    <div className='card shadow p-3 m-2'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <Addproject/>
      </div>
<div className='mt-3'>
<div className='border rounded shadow m-3'>
  <div className='d-flex justify-content-between p-3'>
    <h4>Project Title</h4>
    <div>
      <button className='btn'><i class="fa-brands fa-github"></i></button>
      <button className='btn'><i class="fa-solid fa-pen "></i></button>
      <button className='btn'><i class="fa-solid fa-trash-can "></i></button>
    </div>
  </div>
<p></p>
</div>
</div>
    </div>
  )
}

export default Myprojects