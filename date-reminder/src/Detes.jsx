import React, {useEffect,useState } from 'react'
import {Container } from 'react-bootstrap'
import data from "./data";
import DateTitle from './DateTitle';
import DateList from './DateList';
import DateAction from './DateAction';

const Detes = () => {
    const [dateList,setDateList]=useState([]);
    useEffect(()=>{        
        setDateList(data);
    },dateList)
    return (
            <Container className='conteiner'>
                <DateTitle dateList= {dateList}/>
                <DateList dateList= {dateList}/>
                <DateAction dateList= {dateList} setDateList={setDateList}/>
            </Container>
    )
}

export default Detes