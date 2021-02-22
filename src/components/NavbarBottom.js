import React, {useState, Fragment} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import whatsappIcon from '../whatsapp icon.svg';
import WhatsappForm from "./WhatsappForm";

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Snackbar from '@material-ui/core/Snackbar';


const path = window.location.pathname;
var activeKey = 0;
switch (path) {
  case '/notice/placements':
    activeKey = 1;
    break;
  case '/notice/achievements':
    activeKey = 2;
    break;
  case '/notice/examinations':
    activeKey = 3;
    break;
  case '/notice/scholarships':
    activeKey = 4;
    break;
  case '/notice/activities':
    activeKey = 5;
    break;
  case '/notice/other':
    activeKey = 6;
    break;

  default:
    break;
}



const NavbarBottom = () => {

  const [showForm, setshowForm] = useState(false)
  const [open, setOpen] = React.useState(true);

  function openForm() {
    // document.getElementById("whatsappform").style.display = "block";
    setshowForm(!showForm);
  }
  
    return (
      <Fragment>
        <Navbar className="navbar-bottom" collapseOnSelect onToggle={console.log('hy')}>

    <Nav variant="pills" activeKey={activeKey} className="mr-auto">
      <Nav.Item><Nav.Link eventKey={1} className='nav-link' href="/notice/placements">Placements</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey={2} className='nav-link' href="/notice/achievements">Achievements</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey={3} className='nav-link' href="/notice/examinations">Examinations</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey={4} className='nav-link' href="/notice/scholarships">Scholarships</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey={5} className='nav-link' href="/notice/activities">Activities</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey={6} className='nav-link' href="/notice/other">Other</Nav.Link></Nav.Item>
    </Nav>
 <img className='whatsappicon' onClick={openForm} src={whatsappIcon} />
 
      </Navbar>
      {showForm ? <WhatsappForm />: null}
    

      <Collapse in={open}>
      <Snackbar style={{marginBottom:'45px'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} onClose={()=>{setOpen(false)}}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >x
            </IconButton>
          }
        >
          Get Connected on WhatsApp!
        </Alert>
        </Snackbar>
      </Collapse> 
    

  </Fragment>
      
    );
};

export default NavbarBottom;