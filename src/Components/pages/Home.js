import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      
        <Carousel className="w-90 p-3">
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="pic/11.jpg" alt="Img One" />
            <Carousel.Caption>
              <h1>We Offer Dignity</h1>
              {/* <p>Sample Text for Image One</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="pic/22.jpg" alt="Img Two" />
            <Carousel.Caption>
              <h1>Practice Transparency</h1>
              {/* <p>Sample Text for Image Two</p>  */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="pic/111.jpg"
              alt="Img Three"
            />
            <Carousel.Caption>
              <h1>Foster Resilience</h1>
              {/* <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="pic/44.jpg" alt="Img Four" />
            <Carousel.Caption>
              <h1>Connect Families</h1>
              {/* <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="pic/88.jpg" alt="Img Five" />
            <Carousel.Caption>
              <h1>Witness Transformation</h1>
              {/* <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <div >
          <br />
          <ul>
            <p>
              <h5 style={{ marginRight: "15px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Resilience Visitation
                </span>{" "}
                was founded in 2019 to transform the ways supervised visitation
                and parenting supports are offered to families involved with CFS
                in the Bozeman area. We exist to help families working through
                experiences of abuse and neglect of children stay connected and
                discover healthier ways of relating.
              </h5>{" "}
            </p>
            <p>
              <h5 style={{ marginRight: "15px" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}> We offer dignity</span> to
                every individual by respecting their agency and providing
                opportunities to connect with their families in healthy ways.
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  We practice transparency
                </span>{" "}
                by celebrating successes and taking responsibility for our
                mistakes.{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  We foster resilience
                </span>{" "}
                by understanding that change is slow as we support families
                throughout their journey and by helping to tackle the logistical
                challenges that come with messy family situations. We don’t take
                shortcuts—we do what it takes to{" "}
                <span style={{ fontWeight: "bold" }}>connect families</span>.
              </h5>{" "}
            </p>
            <p>
              <h5 style={{ marginRight: "15px" }}>
                {" "}
                Everyday,{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  we witness transformation
                </span>{" "}
                as families do the hard work needed to break cycles of abuse and
                neglect.
              </h5>{" "}
            </p>
          </ul>
        </div>
        <br></br>
        <br></br>

        <div className="card-group">
          <div className="card">
            <Link style={{textDecoration: "none", color:"black"}} to="/about">
              <img
                className="card-img-top"
                src="pic/77.jpg"
                alt="Card img cap"
              />{" "}
           
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                About
              </h5>
              <p className="card-text">
                Resilience Visitation serves families in Gallatin, Park, and
                Sweetgrass Counties. At this time, we only work with families
                referred to us by Child and Family Services. 
                <br/>
                <span style={{textDecoration: "underline"}}>More</span>
              </p>
            </div>
            </Link>
          </div>

          <div className="card">
            <Link style={{textDecoration: "none", color:"black"}} to="/models">
              <img
                className="card-img-top"
                src="pic/06.jpg"
                alt="Card img cap"
              />{" "}
            
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                Models
              </h5>
              <p className="card-text">
                Whenever possible Resilience Visitation seeks to use
                evidence-based models as we work with families 
                <br/>
                <span style={{textDecoration: "underline"}}>More</span>
              </p>
            </div>
            </Link>
          </div>

          <div className="card">
            <Link style={{textDecoration: "none", color:"black"}} to="/jobs">
              <img
                className="card-img-top"
                src="pic/66.jpg"
                alt="Card img cap"
              />{" "}
           
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                Apply Now To Join The Team
              </h5>
              <p className="card-text">
                Through professional training and our patient presence, we make
                a significant difference as families work to break cycles of abuse and neglect. If that
                sounds like something you’d like to be a part of, take a look at
                our job descriptions. {""}
                
                <span style={{textDecoration: "underline"}}>More</span>
              </p> 
            </div>
            </Link>
          </div>
        </div>
      
    </div>
  );
}
//Checked 