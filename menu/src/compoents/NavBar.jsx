import React from 'react'
import { Navbar, Nav, Form, Container, Row } from 'react-bootstrap';
const NavBarItem = ({ foodList, setFoodList }) => {
    return (
        <Row>
            <Navbar bg='dark' expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#">
                        <span className='title fw-bold'>
                            مطعم جديد
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="ابحث"
                                className="mx-2"
                                aria-label="Search"
                                onChange={(e) => {
                                    let newList = foodList.filter(ee => ee.cuisine === e.target.value);
                                    console.log(newList);

                                    setFoodList(newList);
                                }}
                            />
                            <button className='btn fw-bold'>ابحث</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBarItem