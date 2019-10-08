import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class Services extends Component {
  render() {
    return (
      <div>
        <Container className="app-present">
          <h1 className="app-title">Services</h1>
          <h2>Appliances we repair are wide range of Dryers, Dishwashers, <br/>Freezers, Microwave, Oven, Refrigerator, etc.</h2>
          <p>Smart Appliance Repairs, Home Appliance Services, Appliance Services - Los Angeles, CA</p><br/>
          <Row>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media2.fl.yelpcdn.com/bphoto/4OkMtx6FUCx4v6vv8E8HKw/o.jpg" rounded />
            </Col>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media1.fl.yelpcdn.com/bphoto/7AKNiRYr2-C2f3YrcMWAiA/o.jpg" rounded />
            </Col>
            <Col lg={true}>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://s3-media2.fl.yelpcdn.com/bphoto/4OkMtx6FUCx4v6vv8E8HKw/o.jpg" rounded />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Services;