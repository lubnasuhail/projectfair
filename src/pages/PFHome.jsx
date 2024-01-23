import React ,{useState}from 'react'
import { Row,Col } from 'react-bootstrap'
import Homepojects from '../components/Homepojects'
import designerImg from '../Assets/dev.png'
import { Link } from 'react-router-dom'

function PFHome() {

  const [isLogged,setIsLogged]=useState(false)

  return (
    <>
    <div className='conatiner-fluid rounded' style={{width:'100%',height:'100vh',backgroundColor:'#e868c4'}}>
    <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
            <h1 style={{fontSize:'50px'}} className='text-secondary'> 
            <i className="fa-solid fa-prescription fa-bounce" style={{color:'black'}}></i>
                project fair
                </h1>
                <p className='mt-3' style={{textAlign:'justify'}}> The project aimed to collaboratively explore practical alternatives to the dual salary system and enable
                explore practical alternatives to the dual salary system and enable
                 the INGO sector to maximise its contributions to decent ...</p>
                 {
                  isLogged?
                 <Link to={'/dashboard'} className='btn btn-warning'> Manage Your Projects <i class="fa-solid fa-arrow-right"></i></Link>
                 :
                 <Link to={'/login'} className='btn btn-info'> Start to explore <i class="fa-solid fa-arrow-right"></i></Link>
                }
        </Col>
        <Col sm={12} md={6}>
          <img src={designerImg}  className='img-fluid' alt=""/>
        </Col>
    </Row>
    </div>
    <div className='my-5 bg-info'>
      <h3 className='text-center'> Projects</h3>
       <marquee behavior="" direction=""> 
      <Homepojects/>
       </marquee>  
      <div> 
      <Link to={'/Projects'} className='d-flex justify-content-center'>See more</Link>
      </div> 
      </div>
    </>
  )
}

export default PFHome