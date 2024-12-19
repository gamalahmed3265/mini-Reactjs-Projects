import React from 'react'
import { Col, Row } from 'react-bootstrap'

const HeaderItem = () => {
  return (
    <Row>
        <Col sm="12" className="justify-content-center text-center">
            <h2 className='title-header fw-bold fs-4'>
                قائمة الطعام
            </h2>
            <div className='d-flex justify-content-center align-items-center'>
                <span className='underline'></span>
            </div>
        </Col>
    </Row>
  )
}

export default HeaderItem