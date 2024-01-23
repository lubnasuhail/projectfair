import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import { registerApi } from '../Services/Allapi'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {

  const [userData, setUserData] = useState({
    username: "", password: "", email: ""
  })
  const navigate=useNavigate()
  // console.log(userData)
  const handleRegistration = async (e) => {
    e.preventDefault()
    if (!userData.username || !userData.password || !userData.email) {
      toast.info("Enter values to Every Fields!")
    }
    else {
      const res = await registerApi(userData)
      if(res.status===200){
        toast.success(`Regsitration of ${res.data.username} is successful!!`)
        setUserData({username:"",password:"",email:""})
        navigate('/login')
      }
      else{
        toast.error(res.response.data)
      }
      console.log(res)
    }
  }
  const registerForm = register ? true : false
  return (

    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center'>
          <i class="fa-solid fa-arrow-left"></i>
          Back to Home
        </Link>
        <div className='bg-success p-5 rounded'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyoD49VN8eTp1wuyjE5N06o9B6BN7prH4-Q&usqp=CAU" alt="img" />
            </div>
            <div className='col-lg-6'>
              <div className='d-flex align-center flex-column'>
                <div className='d-flex mt-2 text-light'>
                  <i className="fa-solid fa-prescription fa-bounce" style={{ color: 'pink' }}></i>
                  <span className='h1 fw-bolder'>Project Fair</span>
                </div>
                <h4 className='text-light'>
                  {
                    registerForm ? 'Sign Up For Project Fair' : 'Sign In For Project Fair'
                  }
                </h4>
                <form className='w-100 text-light'>
                  {
                    registerForm &&
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="enter your name" value={userData.username} onchange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                    </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" value={userData.email} onchange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="enter your email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="enter your password" value={userData.password} onchange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                  </Form.Group>

                </form>
                {
                  registerForm ?
                    <div>
                      <button className='btn-btn-primary'>Sign Up</button>
                      <Link to={'/login'} className='ms-3'>Already a User?Sign In</Link>
                    </div> :
                    <div>
                      <button className='btn-btn-primary' onClick={handleRegistration}>Sign In</button>
                      <Link to={'/register'} className='ms-3' >New User?Sign Up..</Link>
                    </div>
                }


              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Auth