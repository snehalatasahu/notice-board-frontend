import React from 'react';
import './App.css';
import NavbarTop from "./components/NavbarTop";
import background from "./Background.jpg";
import { Container } from 'reactstrap';
import CardSection from "./components/CardSection";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import NoticeView from "./components/NoticeView"
import NavbarBottom from "./components/NavbarBottom";




function App() {
  
  return (
    <Router> 
    <Container>
      <NavbarTop/>
     
      <Switch>
        <Route exact path="/" component={CardSection}/>
        <Route exact path="/notice/placements" component={()=><NoticeView link='placements'/>}/>
        <Route exact path="/notice/achievements" component={()=><NoticeView link='achievements'/>}/>
        <Route exact path="/notice/examinations" component={()=><NoticeView link='examinations'/>}/>
        <Route exact path="/notice/scholarships" component={()=><NoticeView link='scholarships'/>}/>
        <Route exact path="/notice/activities" component={()=><NoticeView link='activities'/>}/>
        <Route exact path="/notice/other" component={()=><NoticeView link='other'/>}/>
        <Route exact path="/add"><div style={{paddingTop:'100px'}}><a href="http://127.0.0.1:8000/admin/noticeboard/notice/">add</a></div></Route>

        {/* <Route exact path="/subscribe" component={WhatsappForm}/> */}
      </Switch>
      <NavbarBottom/>
    
    </Container>

    </Router>
    
  );
}

export default App;
