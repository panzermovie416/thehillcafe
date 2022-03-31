import React from "react";
import "./menu.css";
/*import background from "./b1.jpg"; */
import background2 from "./b4d.jpg";
import background3 from "./b3.jpg";
import background from "./b1d.jpg";

function Menu(props) {

    return (

        <>
            <div className="vw-100% vh-100% menu">
                <div className="d-flex flex-wrap flex-column">
                    <div className="d-flex flex-wrap" style={{
                        backgroundImage: `url(${background})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className="d-flex py-5" style={{ marginTop: '50px' }}>
                            <div className="d-flex flex-wrap py-5" style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',

                            }}>
                                <div className="d-flex flex-wrap col-4 justify-content-center">



                                    <div className="col-12 text text-center ">
                                        <p className="font-linkm" style={{ color: "white", fontSize: "70px" }}>Cafe Menu</p>
                                        <p style={{ color: "white", fontSize:'17px' }}>Our coffee is undoubtedly the best way to start your day, and our delicious, fresh breakfast and lunch options will satisfy your appetite. Great coffee starts with great beans.
                                        </p><p style={{ color: "white" , fontSize:'17px'}}> We use an exclusive blend of the highest quality coffee beans, then our baristas work their magic to make your coffee exactly how you like it. </p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="col-11 row-11"
                                        style={{
                                            width: '100%',
                                            maxWidth: '500px', padding: '2px', backgroundColor: 'white'

                                        }}
                                        src="./images/cafemenu.png"
                                        alt="Cafe Menu"
                                    />
                                </div>




                            </div>
                            {/* <div className="mt-3 d-flex flex-wrap flex-column" style={{marginLeft:'100px', marginRight:'100px'}}>
                        <div className="d-flex flex-wrap flex-column">  
                            <div className="">
                                <div>
                                    <img
                                    className=""
                                    style={{width:'100%',
                                            maxWidth:'800px'
                                            }}
                                    src="./images/cafemenu.png"
                                    alt="Cafe Menu"    
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text text-center" style={{marginTop:'50px', marginRight:'90px'}}>
                        <h1 className="" style={{color: 'White'}}>Cafe Menu</h1>
                        <p className="" style={{color: 'White', marginLeft:"", marginRight:""}}>This is Menu for cafe blah blah blah blah blahaaaaa asdfsdas dsa d sad sad sadsadsa dsad sa d asd sa d sa dsa ds ad asd a fsfg ff sdfgsdfag dfg sdfgs dfg dfg d fg df gsdf gd f gdf gdf gdf gdfs gd fg df g sdf gdf asd asd sad sad asd a dasd asd sa dsa </p>
                    </div> */}
                        </div>
                    </div>
                    <div className="line" style={{
                        backgroundColor: 'white',
                        height: 3
                    }}>

                        <p></p>
                    </div>

                    <div className="d-flex flex-wrap" style={{
                        backgroundImage: `url(${background2})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div className="d-flex py-5" style={{ marginTop: '50px' }}>
                            <div className="d-flex flex-wrap py-5" style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',

                            }}>
                                <div>
                                    <img
                                        className="col-11 row-11"
                                        style={{
                                            width: '100%',
                                            maxWidth: '500px', padding: '2px', backgroundColor: 'white'

                                        }}
                                        src="./images/foodmenu.png"
                                        alt="Cafe Menu"
                                    />
                                </div>
                                <div className="d-flex flex-wrap col-4 justify-content-center">



                                    <div className="text text-center mt-2 bg-light" style={{}}>
                                        <h3 className="font-linkm" style={{ color: "black", fontSize: "70px" }}>Restaurant Menu</h3>
                                        <p style={{ color: "black" , fontSize:'17px'}}>The refined menu is a selection of delicious Nepalese, Indian and Tibetan dishes ready to satisfy your ultimate appetite. </p>
                                        <p style={{ color: "black" , fontSize:'17px'}}>All our food is made with fresh ingredients and pure Indian spices following the healthy and hygienic cooking method. Our space evokes the feel of parts of India, Nepal and Tibet, our hope is that our plates breathe new life into the country’s diverse and flavorful cuisine.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="line" style={{
                        backgroundColor: 'white',
                        height: 3
                    }}>

                        <p></p>
                    </div>
                    {/* <div className="col-12 d-flex py-5 justify-content-center" style={{
                                            backgroundImage:`url(${background2})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',}}>
         <div className="mt-5 text text-center" style={{marginTop: '50px', marginRight: '90px', marginLeft: '90px'}}>
                <h1 className="" style={{color: 'Black'}}>Restaurant Menu</h1>
                <p className="" style={{color: 'Black'}}>This is menu for restaurant. asd sad asd sad sadsad sads ad sad asd as dsa ds adsa dsadsa dad sadsa dsa dsad sad as d sad as  asd sad sa ds ad sad a sadsa d sad sa sad sad asdsa d sad sad  das d sad asd as </p>
            </div>
            <div className="col-12 col-md-4 mt-3" style={{marginLeft:'', marginRight:'100px'}}>
                
                <div className="d-flex flex-wrap flex-column" >
                     
                     <div className="">
                        <div>
                            <img
                            className="d-block w-100"
                            src="./images/foodmenu.png"
                            alt="Cafe Menu"
                        />
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
         <div className="line" style={{backgroundColor:'black', 
                                        height:5
                                        }}>
            <p></p>
         </div> */}

                    {/* <div className="col-12 d-flex py-5" style={{
                                            backgroundImage:`url(${background3})`,
                                            backgroundPosition:'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'}}>
             
            <div className="col-12 col-md-4 mt-3 flex-wrap flex-column" style={{marginLeft:'100px', marginRight:'100px'}}>
                <div className="d-flex flex-wrap flex-column">
                     <div className="">
                        <div>
                            <img
                            className="d-block w-100"
                            src="./images/barmenu.png"
                            alt="Cafe Menu"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text text-center" style={{marginTop:'50px', marginRight:'90px'}}>
                <h1 className="" style={{color: 'White'}}>This is Bar Menu</h1>
                <p className="" style={{color: 'White'}}>asdasdddddddddddddddasdas asd sa d sad sa dsad sadddds ad sad sa ds ad sa d sad a  d sasa dsa ds ad sad sa d sa ds ads ad as dsadsadsadsada</p>
            </div>
         </div> */}
                    <div className="d-flex flex-wrap flex-column">
                        <div className="d-flex flex-wrap" style={{
                            backgroundImage: `url(${background3})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="d-flex py-5" style={{ marginTop: '50px' }}>
                                <div className="d-flex flex-wrap py-5" style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',

                                }}>
                                    <div className="d-flex flex-wrap col-4 justify-content-center">



                                        <div className="text text-center">
                                            <h3 className="font-linkm" style={{ color: "white", fontSize: "70px" }}>Bar Menu</h3>
                                            <p style={{ color: "white" , fontSize:'17px'}}> What other way to cheer your nights, other than with our chilled Beer. We offer large variety of Imported and Local blended Whiskey and foreign Wines. </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            className="col-11 row-11"
                                            style={{
                                                width: '100%',
                                                maxWidth: '500px', padding: '2px', backgroundColor: 'white'

                                            }}
                                            src="./images/barmenu.png"
                                            alt="Cafe Menu"
                                        />
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}
export default Menu;