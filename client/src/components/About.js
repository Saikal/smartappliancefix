import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

function About () {
  return (
    <div  className='app-present'>
      <h1 className='app-title'>About</h1>
      <Row className="appliance-items-center">
        <Col lg={true}>
          <h2>Smart Appliance Fix</h2>
          <br/>
          <p>Established in 2015.</p>
          <p>This home Appliance Repair business started in another country in 2010. Since 2015, it has been continued in Los Angeles, CA</p><br/>
          <p>Smart Appliance Repair is an owner operated - one of only a handful of appliance repair and installation companies around that can claim that. We have managed to build a good reputation over the years by sticking to our principles, having a solid work ethic, and treating people with respect.</p><br/>
          <p>There is also the fact that we're part of the local economy and live in neighborhoods we work. It's important you know that as it's true that you get better service from a locally run business.</p>
          <p>Our service areas are Los Angeles County and Orange County: LA, Anaheim, Irvine, Santa Ana, Orange, Laguna Beach,  Newport Beach, Huntington Beach, Garden Grove, Laguna Hills and other.</p><br/>
          <p>Smart Appliance Repair - Los Angeles, CA</p><br/>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <Image style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/ZPdxdhr0FaWKWTYG3b-S0wiEkP6qH3FoiujlGtqR-b_c8eDoS3q_vnmSRVAgcckhFuszw6l17qdMNol5f9c_tQF4jW0DP48esNJ8XZat4ls8LbTGND2ODze978MqdI77N78bUeg6KS2bovAeF3TR9s9jsHOSAsEoRX1YfEZEdUt7pB_9OBpGvcXLK-hzbBDV6rcGRa1ORJJM-uzdlQxTPcbqEslWCpfv8FTEohxxyP9DpraWW0jVjCG20_q_hVF3AhUBV02Z5nIDsnWWj4OLpGRWL1m7-L6vov_W8DJ0taRzX3oy9rY14x5YEKnCxd-tHyCQFHsS4-gfWeoWfes9EEVN22V4Tj5ZRl1fE-WxhIWh60zSNs-59wrchzOxodqTdMLS73OJoiHEwR2l8MU9qgQPICShQZHFN57h5sdeOGpUIRdZ-ZOCQX_g4AXrYD8xzC7O7dtHK5LQPSQ_x2GI6qspQkMG77TpMI_DhSAWiV4oagmR2Oz1P-lvCE7U2NhQDGtdvXkLHw16pYMdAq2exlUYLmUuvvnUpT-xHuaElLnPVSEpTp-iCXNU4yN1SMRJ-OCG9lnc_YHQYhU03llcT59akWLMropyeEt0uPLrVKCP7TKJI2JBGYymuJRV-L8gzqOBd_fHr6HutqPZe1hUa9euBSTixpB6UEXnnzI0BPso-UzU-kRe=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/kmQJc1VOwcfZl3UBJAbQ_WraAC8l_DpOjFIGPwTtYjwk9YbinZ_PsCD-BiLY7Y_UqcYyqmrbaLOLfoG_d-k4lpugTmuy_JqzvGPLgk1Mr593tKXvto8gUbI0tzgosVak5EX_cOgNSsRC6Xz5OPBbUREj9vDY6ZJQBk1G_ibfAomTPZHnoHDMPEvLtgDaNUXviUeHaanaIWaNoa-ALbVecRbHGAhKNYO4bTF-U48sM9SKWRVhcpm3FGHNgjOLgWzhS3ie8ZXOYde09QR4ZXx2N9l9WhZEipcQHLR_pyWecj1CxDNQPBsrynIJo_VA3R6KiwmTxBgNLEbBOBwy12_0VAjllUevy6226M6onRlOISxbE8GzML-9f1IymOl8M2k5ZWIAM8vvcU3l9d80t0FcC6ARee82XqXocIs-JlM-DJtgmrewzw1FDU73fA8bprhXiwas09hWbov91CUCLgeA3WuPqiydx5NMJg_8zccNAmYSllvx1UbFlx2acPiUa9o6AfChx88KGWQGemi37VHa4gTVxnNxF3Sa9n_b1VLIcdCrN3v8Jk-tSjSKkso7A-FGne11PLCtACZvdLhiedCvdmS1al2D9dy70gFdNstoAT-YNQLR6gocTk3EW91LJ1ftOpGthAqdzHwOPbcnWPcagpERK47rm1VbFK-n9vjDiTq1lVgwjeiF=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/HQxW9Ju1_OEKYeEKns4BgaVw51I5k81tzurx9tgdUr7OrV6Z3PsGRQR61asf24sp1vY3M4hf-b1YW3mJz6A3Z27tkXNfp5yDgh5suYtn5vzBq_dpLmLO8n38WmTdb6HIZ0PGDeuWjpOZKRuedIIsPIZIobSfy2-_F6SyxXD40GRvzc6hRtnrbtxhdllCXZHRgcpT0SD1vxm4-xMoQp8881EHgIkk_AlZoRP1R4yA2od0GKCeEnCenIZVcTDplp4xOyDmY7Qf5FFePSs8b7SYuZJkV8J2xPXU6HU1o8YoJ_wgT7zyRdCX0QPl2txsS5apF3ftj7SzH8jyHlfvF0EsNK5yvHoEsluKYnzlC-CSrRvpVV5z079wm160sOWPJWP1NCFgjk9jh_soAvDe_EKYnQtgWuOT3LtgbDmE2Wz0M8Ctqnj5kbgmBm7hNPM25j2mShNcsBGXIrAZD8Zp_vnt9CF0mzHwHwXv6Xqj2rlWFPUXMPr2Kk9VUjAXAkG-fRkfjXi-0UF2KFpWyxLvMZZZATPdHhyXEVIQyBYVYlExJKj5Byic58Mt2tCYNOgZTozJnAyVYOrP7z2k8mKZ5AQqC3cTXHqnrx-icI47Dls4FZXolsSTns2kUWhph1_YC2mVAaViGC0nWDirVC-vmyBgQqdHX1HWuI0AD0a9Go2G8Wenj036CUmb-fgVAbV3h6AGaSXcdxq-FQRqzmiXcILDYhHgD0OBlzhrIcLwX3aMYynl_g=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="smart-brands" style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/-MxCmLGILuvaQGWRzMFIuJaTjiTni3R1sxhzF5o6zIicVSOV-HniVbXQkKZh8ZArcfVDr0L3_z0g82_o_6RO9Bp1ywKBZ0noVoDNMfwGkui3PAqUlD9kt4RIBP4vPKK8ksr4LNZixf0MDZkhGccLMhczNFHgk-h9zK5ioQu9CBz8r31fHpkr98fY1zbw4cMAOZupOvAKqMfQq1DRll90-qD32Vo_3wa1IKgFG96Ti9l0q7myjDtPpcYaOr7zoSkUdJJy0Q2PY9pwG9TcL4flRu7KnNYzE2Xopc9mYJ_otqaM5KX5GccFMXwnqBDsUz3GIC_C3ZUsImY81B8z1GMP4kvIN546Xcw9MXh4Rflb-d_a3RHIiIMkEyh40hlc3mkbxw_MmK9XGqIJqMRMNyB1za9l3kJpGODwpaCtUq0QDPXu74GeO-UIqY0cJfZB-IfWJ7Z87dewo_2CFtu1taGwZnT-7-vq2G_f5O5OdkktOICZKxuKqRRtT1vgoDqD3opGvTLWJ0a4_BuDzS8m81eM3qHaKij6RRCfvWYZ9hVH4qvDPy83PgkeVIiFPP6Vxg9SJgqtRYBR_z3XDpdZCGDCXTkSoV8ce_OA9P82jrak5s4oTvQa__H9dCJpiKW7b5L1coE77CLm6jZHaUzcLUQnepyarMSSv3inxXA94piAdUI4wEmtvQjpD7vjhq3wQ_EY7lk2vDLn7ccUR5E9e811FXuGHHD4J36urGWIBythBv8HZQ=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image className="smart-brands" style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/L5U83hA6YUJMZRG4-QoACcYxStdH2JK1s6v06zGXiMH76f88HITsWUX5hVt2AAZpvGL6JmHyxKciSV0PRQf-Knwe7Kkhi0s6AdmXnFxgKno5pCChzmDRvHZWUN2-0LA32oPLjBZs7eeEiDA2AcvMDK-d6ZuHTfg-KPrHB0g4ptWy42-1crv51NZ95HXZ-S7tQKycS3Xtx3SbkVnSBPne9366k0BkfAsdKk4eQwxZeAoiXY7AQ9ljg0bbn1IiEQxw2R_wmAu7pTvETzKCZvibmBTZ0DP4OVLbiFEs5CYKhRbpK96ROCgjXBFCNiWR58-pwe-wpAlmP9k7BjLMMci-9zgPadN-Be22utHecrrQWZA-w20dBSvSJfsWgxftOLsgxQMrX-LQouygxl-yLi6lUoCBLlvkfUkK2s7HOtRfPNGiyZ87_v7VhBTNEpLpsXM_Px641q3JSHqaR6cP1xfV1TPWJfNqv5ZSihTdkacyho_UP9DuQ8Ktv3WoguXk48bh8bRczmX0N-puGIx0cL0G2KNkbRMp8KBwX0C4T8BtkeSzEGL1OgPDvPsptLPyWjbvNvR6rG7JCRL6O6ib_74y7iYOhUVA3_3ktvlS4b2TMusj97ObuTOn_XIjAyq-Frnu1O0hZGHrYGNCu8W1N-XnedtgGy-1s5Mm4KCoJJjDyrTG_zrlyeFZCt0rwUWJWhAvCXEnVLTDiiZceueKIKJ3iELkH9iGrQ5yojKXlxEPiBPo5A=w483-h505-no" rounded />
            </Carousel.Item>
            <Carousel.Item>
              <Image style={{'width': '500px', 'height': '500px', 'margin':'10px'}} src="https://lh3.googleusercontent.com/2ppvFKUltQDctF7krUKwU6t2LJHLQJgF36sZn-I99S5xKTZysyFZxI51N5NmOKRXpol3mz8QLHQ8h6llf3KI1jdAdHH7oE9IG1lDIgYCsZlecqBHY8dY8hPMsfn9Uq33zl6DiFCM-Xha5UnUeh4y3v52kzK3DAhhrLtyK2d6E-OqwgzFDxh7TWKDHLUTFwxUhsZ7s5w269Y7j5BjspPCtHzwJVFYMniQCvphL1xUfQf5CllilknUTXvztaGtErU6Xc5Mk-77OQBQEM0obD211n2BfjvgRVgpkmofISMwUiDqUcXmLHuZjoktcVLxm181B8991Henqnf2UJ1WMWEPBCj35mlP4YlbgGpVvfwE7-yYRv1C02fjhO8WZ951P-BlkP1Zl7Eo40-6EAlf5Rg_uTnkig5epypNuy3RrY0hpDIZ-w7J8WTYKXfibqzOpTLhPzei_Qaf1_R2fB-T7EsISHtw_AmiSnO2Ff7u0iUxkpfwkuSkWXY5DiM_fubKuRBV1TsDJgcp3vcKPvzw9WXPQlUyKvOUHFExvQMPUbf8rX9EL5TvuSeMjxXPaCntdnqnv2gaP7YJFns7rbuP7lrIAwFyQyL8nPJpWdpSD3ci-0cwLLtzcxZpzGDyZz01cS7f4ZoTYZy0bLWR_Jdm2AJkNF12VWZ7k-j9bbGU7_8rMKzUQvFYuMtGD3xV6gTlAxd-Hqtod-3iNA8FtX5PXZDdEnblMG-vmPAhiEIRRLtFJVFTnA=w1716-h1790-no" rounded />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default About;