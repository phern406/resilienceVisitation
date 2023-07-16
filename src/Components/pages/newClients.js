import React from "react";

const newClients = () => (
  <div>
    <br />
    <br />
    <ul>
      <h2 style={{ fontWeight: "bold", marginLeft:"40px" }}>New Clients </h2>
      <p style={{ marginRight: "30px", marginLeft: "60px" }}>
        We are accepting new clients for supervised visitation. All private pay
        visits are facilitated using the <a href=" https://www.visitcoachingcommunity.com/about">Visit Coaching 
          </a> model.
          Visit Coaching{""}    Our ability
        to accept new clients may be limited by staff and facility availability.
        Private pay visitation is available in Bozeman/Belgrade and Livingston.
      
        
        {/* <span style={{ fontWeight: "bold" }}>
            At this time, we only work with families referred to us by Child and
            Family Services. {""}
          </span>
          If you are a social worker and would like more information please
          contact us {""}
          <a classname="email" href="mailto:brice@resiliencevisitation.org">
            HERE
          </a> */}
      
      </p>

      <p style={{ marginRight: "30px", marginLeft: "80px" }}>
      <li style={{fontWeight: "bold"}} >Private Pay Visitation Policies: <a target={"_blank"} href="pic/Sample Private Pay Visitation Policies.pdf"> Click Here </a>  </li>
  <br/>
      <li style={{fontWeight: "bold"}} >Sample Service Fee Schedule: <a target={"_blank"} href="pic/Sample Service Fee Schedule.pdf"> Click Here</a>  <br/><em>Visitation and transportation fees are subject to a sliding fee scale based on household income.</em> </li>
        
<br/>

       <h5>Please contact us  <a classname="email" href="mailto:brice@resiliencevisitation.org">
            HERE
          </a> to inquire about availability.{" "}
          </h5> 
      </p>
      <br/>
      <br/>
      <br/>
   

     {/* <center> <img src="pic/sunny.jpg" alt="img pic/sunny.jpg"   style={{ width: "55%" }} /> </center> */}

    </ul>
  </div>
);

export default newClients;

