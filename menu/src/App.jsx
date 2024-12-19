import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import NavBarItem from './compoents/NavBar';
import HeaderItem from './compoents/HeaderItem';
import Catgories from './compoents/Catgories';
import CardItem from './compoents/CardItem';
import axios from 'axios';
const App = () => {
  let [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes/")
      .then((response) => {
        setFoodList(response.data.recipes); // Handle the response
      })
      .catch((error) => {
        console.log(error.message); // Handle any errors
      });
  }, [foodList])

  return (
    <div className=''>
      <NavBarItem foodList={foodList} setFoodList={setFoodList} />
      <Container>
        {(foodList.length === 0 || foodList === null) ?
          (
            <div className="loader"></div>
          ) : (
            <>
              <HeaderItem />
              <Catgories foodList={foodList} setFoodList={setFoodList} />
              <CardItem foodList={foodList} />
            </>)

        }
      </Container>
    </div>
  )

}

export default App