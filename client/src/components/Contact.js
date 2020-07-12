import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


class Contact extends Component {
  render() {
  return (
    <div>
      <Container id="contact-app" className="app-present">
        <h1 className="app-title">Contact Us</h1>
        <a href="https://www.google.com/maps/dir//159+Rockview,+Irvine,+CA/@33.6996414,-117.8789414,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcdde66c4f3e8b:0x33ce5c8e17e9be6!2m2!1d-117.8211321!2d33.6537229!3e0?hl=en" target="_blank">
          <Image style={{'width': '100%', 'margin':'45px auto 10px'}} src="smartappliancemap.png" rounded />
        </a>
        <Row style={{'padding': '50px 50px'}}>
          <Col lg={true}>
            <h2>Contact</h2>
            <Button className="btn-app" variant="primary" size="lg" href="tel:7737820255">
              Call Now
            </Button>
            <p>Call to (773)782-0255</p>   
            <Button className="btn-app" variant="primary" size="lg" href="sms:7737820255">
              Text Now
            </Button>
            <p>Text to (773)782-0255</p>       
          </Col>
          <Col lg={true}>
            <h2>Address</h2>
            <Button className="btn-app" variant="primary" size="lg" href="https://www.google.com/maps/dir//159+Rockview,+Irvine,+CA/@33.6996414,-117.8789414,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcdde66c4f3e8b:0x33ce5c8e17e9be6!2m2!1d-117.8211321!2d33.6537229!3e0?hl=en" target="_blank">
              Get Directions
            </Button>
            <p>159 Rockview<br/>Irvine, CA 92612</p>          
          </Col>
          <Col lg={true}>
            <h2>Business Hours</h2>
            <Container className='week-hours'>
              <Row> 
                <Col xs={5}>
                  <p>Mon:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:00 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Tue:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Wed:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Thur:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Fri:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:30 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Sat:</p>
                </Col>
                <Col>
                  <p>7:00 AM – 7:00 PM</p>
                </Col>
              </Row>
              <Row> 
                <Col xs={5}>
                  <p>Sun:</p>
                </Col>
                <Col>
                  <p>Closed</p>
                </Col>
              </Row>
            </Container>         
          </Col>
        </Row>
      </Container>
    </div>
  )
  }
}

export default Contact;