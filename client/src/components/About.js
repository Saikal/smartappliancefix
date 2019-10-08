import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

function About () {
  return (
    <div className='app-present'>
      <h1 className='app-title'>About</h1>
      <Row>
        <Col lg={true}>
          <h1>Smart Appliance Fix</h1>
          <p>Smart Appliance Repairs, Home Appliance Services, Appliance Services - Los Angeles, CA</p><br/>
          <p>Smart Appliance Aepair is owner operated - one of only a handful of appliance repair and installation companies around that can claim that. We've managed to build a good reputation over the years by sticking to our principals, having a solid work ethic, and treating people with respect.</p><br/>
          <p>There is also the fact that we're part of the local economy and live in neighborhoods we work. It's important you know that as it's true that you get better service from a locally run business.</p>
        </Col>
        <Col lg="4">
          <Carousel>
            <Carousel.Item>
              <Image className="smart-brands" style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/FwlbF7VqUHP2EEH_ebI3CXjoLXinNfPm21RyvQXqmsDBS_G94n-mfLrlzkKe76K-FVE5ZC_GM8IDxw2b_1fD99FSbMlzgLcxfE_jn7UWPEEcckcTqQIrwBqSfct6HLNRkPakW2WkR45UwaY6Jh7yMaNtxJ456vTx1hNgUoQ-fDbIRpEboAQEDKfyPCabCuyWgCLf9jZdk0KOWpKaYipIhJCyq4SHzl5BoMJpfIsjDakaMqUPuhgKgaCmqZybEHlImD_5OKVjxzwe5Eu6OGKI9JqexRrpRlgI1fSzRgasSoLhf7jdbAEEY5yYin8pN7rQ_5FmW2XnT7HZcLCLbwEw3Dhzdk0_FdcbprRyGxFTlJnUdCLde1VHZkgwL9r-b-xJGAT4Nk9JY3SKqesAUNSGzlG54kPmw8TDktRuj75-e4mdWnDlFhHFB1EbCMD4pP0E9ljhM3Qj4-svKGdM-7xAfvgh82JVSvykyTMci_uFhDWh4Kz3RvE05bWKbFE5R3ztmtYFy9LmZN6u5L0bDVn-R6-sEsKeH7qSV8b23GvOg2FepwbYH4TM_eKFkeJunKlsOAtf5zMYG77q6x3INCfQ-RvL39E9z2j5XPnrr3w8-Go7wwgDGzjykpHTDV9WZwvZxo1wxizdIUD6mMDCnmQo1MXtj8mUciA3axwxTU0dXlNoJFZgszFc=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{'width': '90%', 'height': '300px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/FwlbF7VqUHP2EEH_ebI3CXjoLXinNfPm21RyvQXqmsDBS_G94n-mfLrlzkKe76K-FVE5ZC_GM8IDxw2b_1fD99FSbMlzgLcxfE_jn7UWPEEcckcTqQIrwBqSfct6HLNRkPakW2WkR45UwaY6Jh7yMaNtxJ456vTx1hNgUoQ-fDbIRpEboAQEDKfyPCabCuyWgCLf9jZdk0KOWpKaYipIhJCyq4SHzl5BoMJpfIsjDakaMqUPuhgKgaCmqZybEHlImD_5OKVjxzwe5Eu6OGKI9JqexRrpRlgI1fSzRgasSoLhf7jdbAEEY5yYin8pN7rQ_5FmW2XnT7HZcLCLbwEw3Dhzdk0_FdcbprRyGxFTlJnUdCLde1VHZkgwL9r-b-xJGAT4Nk9JY3SKqesAUNSGzlG54kPmw8TDktRuj75-e4mdWnDlFhHFB1EbCMD4pP0E9ljhM3Qj4-svKGdM-7xAfvgh82JVSvykyTMci_uFhDWh4Kz3RvE05bWKbFE5R3ztmtYFy9LmZN6u5L0bDVn-R6-sEsKeH7qSV8b23GvOg2FepwbYH4TM_eKFkeJunKlsOAtf5zMYG77q6x3INCfQ-RvL39E9z2j5XPnrr3w8-Go7wwgDGzjykpHTDV9WZwvZxo1wxizdIUD6mMDCnmQo1MXtj8mUciA3axwxTU0dXlNoJFZgszFc=w483-h505-no" rounded />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default About;