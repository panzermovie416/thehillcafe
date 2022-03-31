import React, {useEffect, useState }from "react"
import { Carousel, } from "react-bootstrap";
import "./Home.css";

function Home(props) {
//   const [images, setImages] = useState([
//     "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
//     "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// ]);

 const featured = [
  {'title':"The Hill Cafe",  'subTitle':"",  image:"https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {'title':"Cafe Area", 'subTitle':"The Hill Cafe ",  image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80"},
  {'title':"Restaurant",  'subTitle':"The Hill Cafe",  image:"https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
  {'title':"Roof Top Bar",  'subTitle':"The Hill Cafe",  image:"https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
];

    return (
<Carousel>
  {featured.map((feat, index) => {
    return(
    <Carousel.Item key = {index}>
        <img
          className="d-block vh-60"
          src={feat.image}
          alt="First slide" 
          style={{ objectFit: "cover", width:'100%', height:'700px' }} 
          />
        <Carousel.Caption>
          <p className="font">{feat.title}</p>
          <p className="font" style={{fontSize:"30px"}}>{feat.subTitle}</p>
        </Carousel.Caption>
        
      </Carousel.Item>
    );
  })}
</Carousel>
  );
            
}
export default Home;
