import React from "react";
import "./aboutus.css";
import * as FaIcons from 'react-icons/fa';
import background1 from './fern.png'
import background from "./bg2.jpg";

import background2 from "./loop.jpg";

function Aboutus(props) {

    return (
        <>
            {/* <div className="bg-light" style={{ */}

            <div className="bg-light">
                <div className="bg-light" style={{
                // backgroundColor:'#e8e8e8',
                 fontFamily:'kalam',
                 color:"white"}}>
                <div className="d-flex flex-wrap justify-content-center" style={{flexDirection:'row',
                                                          
                                                            alignItems:'center',
                                                            paddingTop:'', 
                                                            backgroundImage: `url(${background})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                            height:'700px',
                                                            
                                                            }}>
                                                                
                        <div className="text text-center col-8 font-linky" >
                                <h2 className="">Who are we?</h2>
                                <h5 className="">"Healthy Food Healthy Life!"</h5>
                                <p style={{ color: "white", width: "" }}>We welcome you to try our Organically grown fresh foods turning into delicious platters as per your desires, giving you full satisfaction and a peaceful mood with the miracles of taste. For some people food could be just a necessity to satisfy their basic needs; for us food is just more than that, it is a pleasure that plays a significant role in understanding your happiness.

                                                                        Eating healthy plays a substantial role in one’s life which is our utmost concern. We “Hill Cafe” do our best to give you the healthiest food avoiding those trans-fat and unhealthy junks relieving the future health risks you might have. We provide you with drooling flavors that are healthy and you want to have it again.. It’s like, ‘All you need is love, but a little chocolate now and then doesn’t hurt.’ We take special care of all the products being used in our kitchen to give you fresh organic taste and unforgettable moments with your loved ones.</p>
                            </div>
                            {/* <div>
                                    <img
                                    className="mx-5"
                                    style={{width:'100%', marginTop:"30px", maxWidth:'600px', padding:'5px', backgroundColor:''}}
                                    src="./images/staff.jpg"
                                    alt="Cafe Menu"    
                                />
                                </div> */}
                </div>
                </div>
                {/* <div className="line" style={{backgroundColor:'black', 
                                        height:2,
                                        marginLeft:'100px',
                                        marginRight:'100px'
                                         }}>
                
                    <p></p>
                </div> */}
            

                <div className="vw-100% vh-100% menu bg-light" style={{backgroundColor:''}}>
                    
        <div className="d-flex flex-wrap flex-column bg-light" style={{border:''}}>
        <p className="font-linky text-center pt-3 bg-light" style={{ color: "black", fontSize: "65px", border:'' }}>Our Mission</p>
            <div className ="d-flex flex-wrap bg-light" style={{
                                            border:'',
                                            backgroundColor:'white'
                                                                                        }}>
                <div className="d-flex bg-light" style={{paddingTop :'20px'}}>
                <div className="d-flex flex-wrap bg-light" style={{
                                                                flexDirection:'row',
                                                                justifyContent:'space-evenly',  
                                                                  
                                                                                }}>
                                                                                    
                        <div className="d-flex flex-wrap col-5 justify-content-center bg-light">

                                

<div className="text text-center font-linky bg-light">
<h2 className="bg-light" style={{ color: "black", border:'' }}>Fresh & Organic</h2>
    <p className="bg-light" style={{ color: "black", border:'' }}>Our coffee is undoubtedly the best way to start your day, and our delicious, fresh breakfast and lunch options 
    will satisfy your appetite. Great coffee starts with great beans.rdtfyguhijokpjhugyfttyguh uoh i y ug ya sds ad sd asd as ds
                                </p>
</div>                  
<div className="bg-light" style={{border:''}}>
                        <img
                                    className="col-11 row-11 img1"
                                    style={{width:'100%',
                                            maxWidth:'1000px', padding:'2px', backgroundColor:'white'
                                            
                                            }}
                                    src="./images/cfe.jpg"
                                    alt="Cafe Menu"    
                                />
                        </div>
</div>
                        <div>
                        <img
                                    className="col-11 row-11"
                                    style={{width:'100%',
                                            maxWidth:'500px', padding:'2px', backgroundColor:'white',
                                            maxHeight:'700px'
                                            // maxHeight:'446px'
                                            }}
                                    src="./images/frm.jpg"
                                    alt="Cafe Menu"    
                                />
                        </div>
                    
                <div className="d-flex flex-wrap  bg-light col-8 justify-content-center font-linky">
                <p className="text text-center" style={{ color: "black", border:'' }}>Our coffee is undoubtedly the best way to start your day, and our delicious, fresh breakfast and lunch options 
    will satisfy your appetite. Great coffee starts with great beans.rdtfyguhijokpjhugyfttyguh uoh i y ug ya sds ad sd asd as ds
                                </p>
                    </div>        
                        
                        
                </div>
                 
                </div> 
                
                </div> 
                
                </div> 
                </div> 
                <div className="line" style={{backgroundColor:'black', 
                                        height:3,
                                        marginLeft:'100px',
                                        marginRight:'100px',
                                        fontFamily:'kalam'
                                         }}>
                
                    <p></p>
                </div>
                <div className="text text-center bg-white font-linky">
                <p className="font-linky text-center mt-3 bg-light" style={{ color: "black", fontSize: "65px"}}>Gallery</p>
                    <p></p>
                </div>







             <div className="bg-light py-5">
            <div className="">
                
                 <div className="d-flex flex-wrap" style={{
                                                                flexDirection:'row',
                                                                justifyContent:'center',  
                                                                alignItems: 'center',
                                                                
                                                                                }}>
                    
                                                           
                
                    <div>
                    {/* <div className="col-12 col-md-4 mt-3 py-3 ">
                        <div className="d-flex flex-wrap flex-column justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <FaIcons.FaConciergeBell size={30} />
                            </div>
                            <div className="text text-center">
                                <h3 className="my-4">Birthday Party</h3>
                                <p style={{ color: "#666666" }}>Your soulmate is your today and all your tomorrows......So are we! </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="col-12 col-md-4 mt-3 py-3">
                        <div className="d-flex flex-wrap flex-column justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <FaIcons.FaConciergeBell size={30} />
                            </div>
                            <div className="text text-center">
                                <h3 className="my-4">Business Meetings</h3>
                                <p style={{ color: "#666666" }}>Your soulmate is your today and all your tomorrows......So are we! </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-12 col-md-4 mt-3 py-3">
                        <div className="d-flex flex-wrap flex-column justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <FaIcons.FaConciergeBell size={30} />
                            </div>
                            <div className="text text-center">
                                <h3 className="my-4">Weeding Party</h3>
                                <p style={{ color: "#666666" }}>Your soulmate is your today and all your tomorrows......So are we! </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-12 col-md-4 mt-3 py-3">
                        <div className="d-flex flex-wrap flex-column justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <FaIcons.FaConciergeBell size={30} />
                            </div>
                            <div className="text text-center">
                                <h3 className="my-4">Weeding Party</h3>
                                <p style={{ color: "#666666" }}>Your soulmate is your today and all your tomorrows......So are we! </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
        </div> 
        </div>
        </>
    );
}
export default Aboutus;