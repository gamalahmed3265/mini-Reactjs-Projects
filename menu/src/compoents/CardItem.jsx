import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'

const CardItem = ({foodList}) => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {foodList.map((item, idx) => (
                <Col key={item.id}>
                    <Card className='d-flex justify-content-center align-items-center g-4 p-4'>
                        <Card.Img className='img-card' variant="top" src={item.image} alt="loading...."/>
                        <Card.Body>
                            <Card.Title className='d-flex flex-row align-items-center justify-content-between'>
                                <h2>{item.name}</h2>
                                <span className='btn-header btn'>{item.cookTimeMinutes}</span>
                            </Card.Title>
                            <Card.Text>
                                {item.ingredients}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
    

export default CardItem