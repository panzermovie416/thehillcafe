import React from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import background from './border.png'
import background1 from './r2.jpg'
import './reservation.css' 
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function Reservation(props) {

    return (
        // <div className="d-flex flex-wrap" style={{
        //     backgroundImage: `url(${background1})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        // }}>
        <div className="reservation" style={{
                                            backgroundImage:`url(${background1})`,
                                            backgroundRepeat: 'no-repeat',
                                            //backgroundPosition:'',
                                            backgroundSize: '100% 40%',
                                            }}>
                                            
        <div className="vw-100% vh-100 font-linky">
            
            <div className="d-flex align-items-center justify-content-center">
            <p className="" style={{ color: "white", marginTop: '100px', fontSize: '60px'}}>Reservation</p>
              
            </div>
            
        </div>

        <div>

         <Form style={{marginTop: "100px"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color:'white', fontSize:'30px'}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color:'white', fontSize:'30px'}}>Phone Number</Form.Label>
                    <Form.Control type="phone no" placeholder="98XXXXXXXX" />
                </Form.Group>
                    <FloatingLabel  style={{color:'white'}} controlId="floatingSelect" label="How many seats">
                        <Form.Select aria-label="Floating label select example">
                            <option>Number of expected visitors</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="10">6 to 15</option>
                        </Form.Select>
                    </FloatingLabel>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label  style={{color:'white', fontSize:'30px'}}>What should we prepare for ? 
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button type="button" class="btn btn-outline-light col-10" style={{fontSize:'30px'}}>Dark</button>
            </Form> 
        </div>


        </div>

        
        // </div>

    );
}
export default Reservation;

