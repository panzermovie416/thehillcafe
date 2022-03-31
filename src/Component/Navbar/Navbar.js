import React, { useEffect, useState } from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";


function NavbarComp(props) {

        return (
          <div className="Navbar">
            <Navbar bg="dark" variant="dark" style={{opacity:'92%'}}>
    <Container className="mt-2 mb-2">
    <Navbar.Brand href="/">
      
    <img
                                       className=""
                                        style={{
                                            width: '100%',
                                            maxWidth: '50px', padding: '', backgroundColor: ''

                                        }}
                                        src="./images/logo.png"
                                        alt="Cafe Menu"
                                    />
    
    </Navbar.Brand>
    <Nav className="text-light me-auto" style={{fontSize:"20px", paddingLeft:"50px"}}>
      <Link className="text text-decoration-none m-2 ms-5 hovereffect2" to="/">Home</Link>
      <Link className="text text-decoration-none m-2 ms-5 hovereffect2" to="/menu">Menu</Link>
      <Link className="text text-decoration-none m-2 ms-5 hovereffect2" to="/aboutus">About Us</Link>
      <Link className="text text-decoration-none m-2 ms-5 hovereffect2" to="/reservation">Reservation</Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
        );
    }
export default NavbarComp;