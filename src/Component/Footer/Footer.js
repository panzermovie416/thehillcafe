import React, { useEffect, useState } from "react";
import "./Footer.css";
import * as FaIcons from 'react-icons/si';
import * as FaIcons2 from 'react-icons/go';
import * as FaIcons3 from 'react-icons/gi';
import * as FaIcons4 from 'react-icons/bs';
import * as FaIcons5 from 'react-icons/md';


function FooterComp(props) {

    return (
        <div className="footer font-link">
            <div className="containerF">
                <div className="row col-11">
                    {/* Column1 */}
                    <div className="col">
                        <h4 className="ms-4"> Getting There </h4>
                        <div className="line m-2" style={{
                        backgroundColor: 'white',
                        height: 1,
                        
                        }}></div>
                        {/* <ul>
                    <div><FaIcons2.FaLocationArrow size={20}/>
                     <p> Bhumare Gaira, Sarangkot, Pokhara </p> 
                     </div>
                        <p>Nepal</p>
                    </ul> */}
                        <div className="ms-4">
                            <a href="https://www.google.com/maps/@28.2480452,83.9458114,18.91z" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                <div className="d-flex hovereffect">
                                    <FaIcons2.GoLocation size={30} color="white" />
                                    <p className="ms-2" style={{ }}> Bhumare Gaira, Sarangkot, Pokhara - 18</p>
                                </div>
                            </a>
                            <div className="d-flex">
                                <FaIcons3.GiForkKnifeSpoon size={30} color="white" />
                                <p className="ms-2" style={{ color: 'white' }}> Breakfast: Till 10am | Lunch: 12pm - 3pm | Dinner: 6pm - 9pm</p>
                            </div>

                            <div className="d-flex">
                                <FaIcons5.MdDateRange size={30} color="white" />
                                <p className="ms-2" style={{ color: 'white' }}> Sun-Sat </p>
                            </div>
                            
                        </div>
                    </div>
                    {/* Column2 */}
                    
                    <div className="col-3">
                        <div>
                            <h4 className="ms-4"> Find us on: </h4>
                            <div className="line m-2" style={{
                                backgroundColor: 'white',
                                height: 1
                                }}></div>
                            <div className="">

                                <div className="ms-4 hovereffect">
                                    <a href="https://www.instagram.com/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="d-flex">
                                            <FaIcons.SiInstagram size={20} />

                                            <p className="ms-2 hovereffect" style={{}}> Instagram</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="ms-4 hovereffect">
                                    <a href="https://www.facebook.com/" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="d-flex">
                                            <FaIcons4.BsFacebook size={20} />

                                            <p className="ms-2 hovereffect" style={{  }}> Facebook </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="ms-4 hovereffect">
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxwVvcbNZntbZGGZjXhVVnCsNVWVNLrvqzBhKXMxHdSxshGtRspcRbmdLGRhtkTnzvbxfh" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="d-flex">
                                            <FaIcons2.GoMail size={20} />

                                            <p className="ms-2 hovereffect" style={{}}> Email </p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="450" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=Bhanjyang+Village+Lodge+and+Restaurant/,18z.google.com/maps/place/28%25C2%25B014'53.0%2522N+83%25C2%25B056'43.9%2522E/@28.248064,83.9446454,18z/data=!3m1!4b1!4m6!3m5!1s0x0:0xa9de7c91222e091!7e2!8m2!3d28.2480645!4d83.9455143&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

                    </div>

                </div>

            </div>
            <div className="line" style={{
                backgroundColor: 'white',
                height: 1, marginLeft: 83, marginRight: 83
            }}>

                <p></p>
            </div>
            <div className="d-flex justify-content-center" style={{height:'40px'}}> © All Rights Reserved • The Hill Cafe • </div>
        </div>
    );
}
export default FooterComp;