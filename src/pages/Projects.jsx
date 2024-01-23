import React from 'react'
import Header from '../components/Header'

function Project() {
  return (
    <div>
    <Header/>
    <div style={{marginTop: '100px'}}>
<div className='text-center mx-2 mb-2 mb-3 border rounded'>
  <h3>All Projects</h3>
  <div className='d-flex mt-5 justify-content-center w-100'>
    <div className='d-flex align-item-center border rounded w-50'>
<input type="text" placeholder='Enter Keyword/Technology to search' className='form-control rounded'/>
<div className='ms-3 px-3'>
  <i class="fa-solid fa-magnifying-glass"></i>
</div>
    </div>
  </div>
  {/*projects*/}
</div>
    </div>
    </div>
  )
}

export default Project