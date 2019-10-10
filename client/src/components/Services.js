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
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/PvV4hqC_F-KPQ3155i3MfP7t-KK4HXZMwV1eD4ENgwJdiM6p9IMPZcM2fH3jSRtbBeWPqCgA0nIU2E-_7NYJv9VGiBPjPluxm93ka1womQBYXgA8-tsK888AhgohmLSzwdbZ5P_14yc-T7eOlAXuX2WUIbHkuSgIYr3XqP8Gc3iKcyr82Z-rz6TQ5HEiXQjTbN8MMPSBE-nCbtd7Hc7iNX2dOqLx0AXHVpJIwBIe0CGjgGQ77FEac6xt9-ddwPKp6fDJEXXtQVz1o44MV2vLhRKU6XSXu5E9648jGDx7WPgmvoyvKNLCPlNLDtlhgMDj1rb6vDearsGX-O6WxWyJzFfWafd2d2-Ir6Zi40NDV1EQVqYKvrrvQpKNp7gZZpfRl3m9SlgBtSjOZC1atp0p5u7zTecK159D2wwMQuNLjsa__mPHy2NtL7xwheqUnmY6g0ZHHVocA7ljHKrwuePnXyH_b401WcL0yzOER0hAyWPZ4pLWFtRwCcxKJX4EtOAPP4LKXJmzJd8OzsUvqfxNjFa-E7GR4SyvAOxyqAHG3cYrYVPQRyFiUG3J7hFWseEoWeb1Nmnro2JFyvPeo6QV8BI566pKDvdT3Hq5XkOEkAfkRVVc3lJhgs7x1C296QVWTNiyzupg_raOhFb-tH35ony91_Ih1otYj29rzKlqPC75SjP1MM3705YqTu64kv-2Mv_ZOeTKdOcHJW8051otiaHOCEVOfpffhgbaeAkuKlQKRpc=w210-h324-no" rounded />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Services;