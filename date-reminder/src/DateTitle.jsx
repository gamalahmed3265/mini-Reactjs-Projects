import React from 'react'
import { Row } from 'react-bootstrap'
const DateTitle = ({dateList}) => {
  return (
    <Row className='title'>
        <h2>لديك اليوم {dateList.length} مواعيد</h2>
    </Row>
)
}

export default DateTitle