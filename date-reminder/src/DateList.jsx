import React from 'react'
import { Row,Card,Accordion } from 'react-bootstrap'
import DateItem from './DateItem'

const DateList = ({dateList}) => {
  return (
            <Row className="dates px-4 py-2">
                <Card>
                    <Accordion defaultActiveKey="0">
                        {
                            (dateList.length<=0 || dateList==null)?
                            <h2 className='title-notfound'>لا يوجد مواعيد</h2>:
                            <DateItem dateList={dateList}/>                        
                        }
                    </Accordion>
                </Card>
            </Row>  )
}

export default DateList