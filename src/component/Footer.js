import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { AiFillEnvironment } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import Map from './Map';

function Footer() {
  return (
    <div className='main mt-5'>
      <Container className='text-center '>
      {/* <h4 className='text-primary mt-3'>Contact</h4> */}
        <h2 className='text-light mt-4'>I would love to hear from you</h2>
        <Row>
        <Col className='text-light mt-4' sm>
          <h1><AiFillEnvironment/></h1>
        <h3>Where to find me</h3>
        <h6>Where to find me</h6>
        </Col>
        <Col className='text-light mt-4' sm>
          <h1><HiOutlineMail/></h1>
        <h3>E-mail me at</h3>
        <h6>Where to find me</h6>
        </Col>
        <Col className='text-light mt-4' sm>
          <h1>< MdCall/></h1>
        <h3>call me at</h3>
        <h6>+92 0363-xxxxxxx</h6>
        {/* <Map /> */}
        {/* <halo /> */}
        {/* <hi /> */}
        {/* <how /> */}
        </Col>
      </Row>

      </Container>
      
    </div>
  )
}

export default Footer
