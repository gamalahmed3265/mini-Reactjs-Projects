import React from 'react'
import { Accordion, Button } from 'react-bootstrap';

const DateItem = ({dateList}) => {
    
  return (
    dateList.map((e, i) => {
        return <Accordion.Item key={i} eventKey={i}>
            <Accordion.Header>
            <img className='img-avater' src={e.img} alt="" />
                {e.title}</Accordion.Header>
            <Accordion.Body className='d-flex gap-5 align-items-center justify-content-arround' >
                <p style={{marginBottom:"0"}}>{e.subTitle}</p>
                <Button variant='danger' onClick={() => {
                    console.log(e.id);

                }}>مسح المعاد</Button>

            </Accordion.Body>
        </Accordion.Item>
    })

)
}

export default DateItem