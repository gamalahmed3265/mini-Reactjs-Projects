import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import data from './data';

const DateAction = ({setDateList}) => {
    return (
        <Row className="bts mt-4">
            <Col>
                <Button onClick={()=>{
                    setDateList(data);
                }}>عرض المواعيد</Button>
            </Col>
            <Col>
                <Button onClick={()=>{
                    setDateList([]);
                }}>مسح الكل</Button>
            </Col>
        </Row>

    )
}

export default DateAction