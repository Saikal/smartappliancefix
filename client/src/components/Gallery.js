import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


function Gallery () {
  return (
    <div>
      <Container id="gallery-app" className="app-present">
        <h1 className='app-title'>Gallery</h1>
        <h2>Dishwashers, Dryers, Freezers, Microwaves, Oven, Refrigerators, etc.</h2>
        <p>Smart Appliance Repairs, Home Appliance Services, Appliance Services - Los Angeles, CA</p><br/>
        <Row>
          <Col lg={true}>
            <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://assets.searshomeservices.com/images/blog/maintenace-kitchen-600x450.jpg" rounded />
          </Col>
          <Col lg={true}>
            <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://res.cloudinary.com/dmuzcwg9u/image/upload/w_250,c_fit/fa2/unknown/26850" rounded />
          </Col>
          <Col lg={true}>
            <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6Ed0ta9HiWZ1YaRY9GG_5FgrWLSBSbhCbihi2ogwBDPj7EAXIg" rounded />
          </Col>
        </Row>
        <div>
          <a href="https://www.yelp.com/biz_photos/baisel-appliance-repair-los-angeles?start=0" target="_blank">Click here to see our Yelp Gallery</a>
        </div>
      </Container>
    </div>
  )
}

export default Gallery;