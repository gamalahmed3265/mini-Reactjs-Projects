import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Row,Col} from "react-bootstrap";


const Catgories = ({foodList,setFoodList}) => {
  
  return (
    <Row className='my-2 mb-5 overflow-x-auto' >
        <Col className="d-flex justify-content-center align-items-center gap-4">
                {
                  foodList.map((e,i)=>{
                    return <button key={i} onClick={()=>{
                      let newList=foodList.filter(ee=>ee.cuisine==e.cuisine);
                      setFoodList(newList);                      
                      
                    }} className='btn-header btn'>{e.cuisine}</button>
                  })
    
              }
        </Col>
    </Row>
  )
}

export default Catgories