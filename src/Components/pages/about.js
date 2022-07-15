import React from "react";

const About = () => (
  <div>
    
      <br />
      <br />
      <ul>
        <h2 style={{ fontWeight: "bold" }}>Where we work: </h2>
        <p style={{ marginRight: "15px", marginLeft: "20px" }}>
          Resilience Visitation serves families in Gallatin, Park, and
          Sweetgrass Counties. In circumstances where families are separated by
          greater distances, we may be able to help with the logistics of
          getting families in one place if one of the parties is in our services
          area. Services may be provided in-home, at a park or other community
          setting, or in an office. We maintain offices in Belgrade and
          Livingston. We also work with community partners throughout our
          service area to provide spaces for families to connect. <br /> <br />
          <span style={{ fontWeight: "bold" }}>
            At this time, we only work with families referred to us by Child and
            Family Services. {""}
          </span>
          If you are a social worker and would like more information please
          contact us {""}
          <a classname="email" href="mailto:brice@resiliencevisitation.org">
            HERE
          </a>
        </p>
        <img src="pic/map.jpg" alt="img pic/map" style={{ width: "95%" }} />
      </ul>
  
  </div>
);

export default About;
