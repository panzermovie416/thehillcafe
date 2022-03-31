import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Aboutus from './Aboutus/aboutus';
import Reservation from './Reservation/reservation';
import FooterComp from './Footer/Footer'
import Home from './Home/Home'
import ScrollToTop from '../Shared/ScrollToTop';

function Main() {
    return (
        <div>
            <ScrollToTop/>
            <NavbarComp />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/aboutus" component={Aboutus} />
                <Route exact path="/reservation" component={Reservation} />
            </Switch>
            <FooterComp />
        </div>
    );
}
export default Main;