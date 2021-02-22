import React, {useState, useEffect, useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card'
import AccordionContext from 'react-bootstrap//AccordionContext';
import { Container } from 'react-bootstrap';
import {FaRegFileAlt, FaFacebook} from 'react-icons/fa'
import Axios from 'axios'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

// const decoratedOnClick = useAccordionToggle(eventKey, onClick);




function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <Container 
        className="p-2"
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'white' : 'lavender' }}
        onClick={decoratedOnClick}
      >       

        {children}
      </Container>
    );
  }

const NoticeView = ({link='placements'}) => {
  const [details, setDetails] =useState([])

  const fetchDetails = async() => {
    const results = await Axios.get(`http://127.0.0.1:8000/api/notice/${link}`)
    // console.log('RESPONSE:', results.data)

    setDetails(results.data)
  }
  
  useEffect(() => {
    fetchDetails()
  }, [])

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();

    return (
      
  <Container className='notice-section'>
  <Accordion defaultActiveKey={1}>
    {details && details.length>0 ? details.map((notice, i) => {
    var options = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      };
      // console.log(notice.date);
      // console.log(notice.published_on);
      // var d = new Intl.DateTimeFormat('en-US', options).format(notice.date)
      // var d = new Date(notice.published_on)
      var d = notice.published_on.split('-');
      const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      return <Card>        
      <ContextAwareToggle as={Card.Header} eventKey={i+1}>
        {d[2]}, {month[parseInt(d[1])-1]} {d[0]}: {notice.title}
      </ContextAwareToggle>
      <Accordion.Collapse eventKey={i+1}>
        <Card.Body>
          {notice.attachment ? <Card.Link href={notice.attachment}><FaRegFileAlt style={{float: 'right'}}/></Card.Link>:'' }
          <Card.Text>
          {notice.detail}
          </Card.Text>
          {notice.fb_link ? <Card.Link href={notice.fb_link}><FaFacebook/></Card.Link>:'' }
          
          </Card.Body>
      </Accordion.Collapse>
    </Card>
    }): 
    
    <Backdrop className={classes.backdrop} open='true'>
      <CircularProgress color="inherit" />
    </Backdrop>
    
  }
  </Accordion>
  
  </Container>
    );
};

export default NoticeView;