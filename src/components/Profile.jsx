import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 me-2'>
        <div>
        <h3>My Profile</h3>
        </div>
        <div className='mt-3 row justify -content-center'>
            <label className='text-center' htmlFor='profile'>
                <input type='file' id='profile' style={{display:'none'}}/>
                <img src='https://th.bing.com/th/id/OIP.QxU5QM6CI1w0MgSFCyp4AgHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7' width={'100px'} height={'80px'} alt='profile pic'></img>
            </label>
            <div className='mt-3'>
                <input type='text' className='form-control' placeholder='Enter Your Username'/>
                </div>
                <div className='mt-3'>
                <input type='text' className='form-control' placeholder='Enter Your LinkdIn ID'/>
                </div>
                <div className='mt-3'>
                <input type='text' className='form-control' placeholder='Enter Your Github ID'/>
                </div>
  
            </div>
        </div>
        
  )
}

export default Profile