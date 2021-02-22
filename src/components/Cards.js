import React from 'react';
import Card from 'react-bootstrap/Card'
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Cards = ({title='Basketball', link='', img=''}) => {
    return (

<Link className='homelink' to={`/notice/${link}`}>
  

<Card className='homecard'>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Img variant="top" src={img} />
  </Card.Body>
</Card>

</Link>
    );
};

export default Cards;