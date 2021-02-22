import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Cards from "./Cards";
import placements from '../images/placement.jpg'
import achievements from '../images/achievement.jpg'
import activities from '../images/activity.jpg'
import examinations from '../images/exam.jpg'
import scholarships from '../images/scholarship.jpg'
import other from '../images/other.jpg'


import '../App.css';

const CardSection = () => {
    return (
       
<Container className='homecard-section' >
  <Row>
    <Col lg><Cards title='Placements' link='placements' img={placements}/></Col>
    <Col lg><Cards title='Achivements' link='achievements' img={achievements}/></Col>
    <Col lg><Cards title='Examinations' link='examinations' img={examinations}/></Col>
    
  </Row>
  <Row>
    <Col lg><Cards title='Scholarships' link='scholarships' img={scholarships}/></Col>
    <Col lg><Cards title='Activities' link='activities' img={activities}/></Col>
    <Col lg><Cards title='Other' link='other' img={other}/></Col>
  </Row>
  
</Container>
    );
};

export default CardSection;