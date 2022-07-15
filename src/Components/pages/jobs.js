import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Jobs = () => (
  <div>
    <br/>
    <br/>
    <br />
    <ul>
    <h2 style={{ marginLeft: "15px", fontWeight:"bold" }}>Want To Join Our Team?</h2>

    <p style={{ marginRight: "15px", marginLeft: "20px" }}>
      Let’s get one thing out of the way—working at Resilience Visitation isn’t
      always easy. We don’t take shortcuts and we routinely find ourselves
      involved in journeys of addiction, mental health challenges, and cycles of
      abuse. We work in a system that sometimes brings more challenges than
      support. Occasionally we get blamed for things we cannot control. If
      you’re looking for a job where you can just skate along, we’re not for
      you!
    </p>
    <p style={{ marginRight: "15px", marginLeft: "20px" }}>
      Of course, we also have the profound privilege of journeying with families
      through extraordinarily difficult circumstances. We support one another.
      We bear witness and offer support as people break the cycle of abuse and
      neglect. Equally, we bear witness as parents fail and as children face the
      consequences of their parents’ inability to break those cycles. Through
      professional training and our patient presence, we make a significant difference as families work to break cycles of abuse and neglect. 
      The challenges are daunting, but for
      us the rewards are greater. If that sounds like something you’d like to be
      a part of, take a look at our job descriptions below.{" "}
    </p>
    <ul>
      <br />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Family Connection Specialist</Accordion.Header>
          <Accordion.Body>
            Our Family Connection Specialists are established social services
            professionals who extend our mission of supporting families through
            their journeys of transformation that break cycles of abuse and
            neglect. These professionals are responsible for setting their own
            schedules as their partner with families. Family Connection
            Specialists receive training in at least one evidence-based model
            and manage their own caseloads. Family Connection Specialists are
            required to have at least a BA in a relevant field.
            <ul>
            
              <li>Pay: $18/hr+</li>
              <li>Bonus pay for evenings/weekends </li>
              <li>5 paid holidays/yr for FT </li>
              <li>Health benefits for FT</li>
              <li>3 weeks PTO/yr (at 40 hrs/week)</li>
              <li>
                Access to professional mental health support for work related
                issues
              </li>
              <br/>
              <a
                classname="email"
                href="mailto:brice@resiliencevisitation.org?subject=Connection Specialist Position">
                <h4
                  style={{
                    textAlign: "center",
                    color: "#545d45",
                    textDecoration: "none",
                  }}
                >
                  SEND RESUME
                </h4>
              </a>{" "}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Family Connection Assistant</Accordion.Header>
          <Accordion.Body>
            Our Family Connection Assistants are generally getting their start
            in the social services field. They support our team as we walk with
            families by providing transportation, administrative support, and
            facilitating additional visits. Family Connection Assistants may
            also have opportunities to carry their own caseload and be trained
            in evidence-based models. Successful Family Connection Assistants
            will find themselves extremely well prepared for the Family
            Connection Specialist role. While Family Connection Assistants do
            get to manage their own schedules, some evening and/or weekend
            availability is needed as we strive to accommodate the work and
            school schedules of the families we serve.
            <ul>
              <li>Pay: $16+ </li>
              <li>Bonus pay for evenings/weekends</li>
              <li>5 paid holidays/yr for FT</li>
              <li>Health benefits for FT</li>
              <li>3 weeks PTO/yr (at 40 hrs/week)</li>
              <li>
                Access to professional mental health support for work related
                issues
              </li>
              <br/>
              <a
                classname="email"
                href="mailto:brice@resiliencevisitation.org?subject=Connection Assistant Position">
                <h4
                  style={{
                    textAlign: "center",
                    color: "#545d45",
                    textDecoration: "none",
                  }}
                >
                  SEND RESUME
                </h4>
              </a>{" "}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Family Connection Champions</Accordion.Header>
          <Accordion.Body>
            Our Family Connection Champions extend the reach of Resilience
            Visitation into their communities. These remarkable, self-driven
            individuals perform all the functions of a Family Connection
            Specialist while providing leadership for their local team. Many
            Family Connection Champions bring new evidence-based programs to our
            team or pioneer new geographic areas. In addition to bringing
            expertise in working with families, Family Connection Champions must
            be capable administrators and excellent communicators. They must
            embody our core values of offering dignity, practicing transparency,
            and fostering resilience. Family Connection Champions have at least
            a BA in a related field and 5 years of relevant experience.
            Candidates with an MA or the equivalent are preferred.
            <ul>
              <li>Pay: $20+</li>
              <li>Bonus pay for evenings/weekends</li>
              <li>5 paid holidays/yr for FT</li>
              <li>Health benefits for FT</li>
              <li>3 weeks PT/yr (at 40 hrs/week)</li>
              <li>
                Access to professional mental health support for work related
                issues
              </li>
              <li> Personalized incentives for team performance</li>
              <br/>
              <a classname="email" href="mailto:brice@resiliencevisitation.org?subject=Connection Champions Position">
                <h4
                  style={{
                    textAlign: "center",
                    color: "#545d45",
                    textDecoration: "none",
                  }}
                >
                  SEND RESUME
                </h4>
              </a>{" "}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </ul>

    </ul>

  </div>
);

export default Jobs;
