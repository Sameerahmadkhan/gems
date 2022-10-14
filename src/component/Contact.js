import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className=''>
        <div className=' container pt-4 '>
    <p className='hello'>Contact Us</p>
       
    <Form  action="https://formsubmit.co/samerrkaan9@gmail.com" method="POST" className='for'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='ms-2' typeof='text'>Your Name</Form.Label>
        <Form.Control
                type="text"
                name="Name"
                
              />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ms-2'>Phone Number</Form.Label>
        <Form.Control
                type="number"
                name="phone"
                
              />
      </Form.Group> 

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ms-2'>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='Email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <textarea className='msg' name='Message'placeholder='Message' required></textarea>
      </Form.Group>
      <div className='btndiv'>
      <Button className='btnsubmit' type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </div>
  )
}

export default Contact
