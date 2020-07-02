import React from "react";
import { Row } from "reactstrap";

const About = (props) => {
  return (
    <div>
      <div className="about">What is VULPIX</div>
      <div className="aboutinfo" style={{ textDecorationColor: "white" }}>
        Privacy is important and valued by individuals in our society. However,
        the wide use of the Internet and networked applications has introduced
        new complexities to how privacy can be maintained. Many notorious mobile
        applications have taken away user privacy by transmitting personal
        information without users' awareness.
      </div>
      <div className="aboutinfo">
        In this paper, we introduce VULPIX, an approach towards comprehensive
        detection of privacy leaks in Android mobile applications. We define a
        comprehensive list of data elements that are considered to be personal
        information and evaluate the comprehensiveness of detecting leaked
        personal information on a set of Android applications.
      </div>
      <div className="aboutinfo">
        These PI data elements can be grouped as follows:
      </div>
      <div className="aboutinfo">
        <dl>
          <dt>1. Device-specific identifiers </dt>
          <dd>1.1 Device information </dd>
          <dd>1.2 SIM card information</dd>
        </dl>
      </div>
      <div className="aboutinfo">
        <dl>
          <dt>2. Person-specific identifiers</dt>
          <dd>2.1 User information </dd>
          <dd>2.2 Location information</dd>
        </dl>
      </div>
      <div className="aboutinfo">
        Please check out our paper here:{" "}
        <a href="https://infocom.info/workshops/track/MobiSec">
          https://infocom.info/workshops/track/MobiSec
        </a>
      </div>
      <div style={{ marginTop: 20 }}></div>
      <Row>
        <div className="footerinfo col-12 col-md-4 m-1">
          <b>
            “Comprehensive Detection of Vulnerable Personal Information Leaks in
            Android Applications”
          </b>
          <Row className="aboutinfo" style={{ marginLeft: 2 }}>
            {" "}
            Nattanon Wongwiwatchai, Phannawhat Pongkham, Kunwadee
            Sripanidkulchai{" "}
          </Row>
          <Row className="footerinfo" style={{ marginLeft: 2 }}>
            {" "}
            (Department of Computer Engineering, Chulalongkorn University,
            Thailand),{" "}
          </Row>
        </div>
        <div className="aboutinfo col-12 col-md-4 m-1">
          <b>
            Infocom Workshop on the Security, Privacy, and Digital Forensics of
            Mobile Systems and Networks
          </b>
          <Row className="aboutinfo" style={{ marginLeft: 2 }}>
            {" "}
            (MobiSec 2020).
          </Row>
        </div>
        <hr />
        <div className="aboutinfo col-12 col-md-3 m-1">
          <dl>
            <dt>Team</dt>
            <dd>Nattanon Wongwiwatchai</dd>
            <dd>Phannawhat Pongkham</dd>
            <dd>Nuntita Taratchon</dd>
            <dd>Kunwadee Sripanidkulchai</dd>
          </dl>
        </div>
      </Row>
    </div>
  );
};

export default About;
