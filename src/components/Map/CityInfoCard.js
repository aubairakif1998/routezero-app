import React from "react";
import LALogo from "./Images/LA.png";
import KCLogo from "./Images/KC.png";

import PPLogo from "./Images/PP.png";

import DMLogo from "./Images/DM.png";

import WDLogo from "./Images/WD.png";

import "./style.css";
export default function CityInfoCard(props) {
  const Ohio = {
    stations: [
      {
        title: "Cleveland OH ",
        description:
          " ",
      },
    ],
  };
  const LosAngelesCA = {
    stations: [
      {
        title: "Los Angeles, CA at Santa Monica Pier",
        description:
          "Route Zero is kicking off at the end of historic Route 66 in Santa Monica! What better way to charge ahead to a zero emissions future than with a nod to the history and nostalgia of Route 66?",
      },
    ],
  };
  const Flagstaff = {
    stations: [
      {
        title: "Flagstaff, Arizona",
        description:
          "The Route Zero Relay will be stopping in Arizona on our zero emission trek across the country. Strong cleaner cars standards will help reduce tailpipe pollution and protect the health of Arizonans and people all across the country.",
      },
    ],
  };
  const SantaFe = {
    stations: [
      {
        title: "Santa Fe, NM",
        description:
          "Route Zero will be hitting Santa Fe to raise awareness about clean vehicles and the importance of strong policies to reduce tailpipe pollution and tackle the climate crisis.",
      },
    ],
  };
  const KansasCityMO = {
    stations: [
      {
        title: "Kansas City, MO",
        description:
          "Our Route Zero Relay team will be holding a press event and rally in Kansas City, MO in May with advocates, community members and elected leaders like Kansas City, MO’s Mayor Quinton Lucas!",
      },
    ],
  };
  const Joliet = {
    stations: [
      {
        title: "Joliet, IL",
        description:
          "We’re nearly halfway there! Joliet is quickly becoming a clean transportation hub with electric vehicle manufacturing facilities being planned in this region. The Route Zero Relay is stopping here to raise awareness about how zero emission vehicles can create jobs, boost our economy, and clean up our air.",
      },
    ],
  };

  const DetroitMichigan = {
    stations: [
      {
        title: "Detroit, Michigan",
        description:
          "Our relay wouldn’t be complete without a stop in Motor City!  Our Route Zero Relay team will be holding a press conference in Motown to celebrate the zero emission transportation revolution that is coming to  Detroit and across the region.",
      },
    ],
  };
  const PittsburghPennsylvania = {
    stations: [
      {
        title: "Pittsburgh, Pennsylvania",
        description:
          "We will be rallying for strong cleaner cars standards and a zero emission transportation future in Pittsburgh! Route Zero will be holding a press conference and rally to highlight the importance of public health protection, job creation, and consumer savings!.",
      },
    ],
  };
  const Baltimore = {
    stations: [
      {
        title: "Baltimore, Maryland",
        description:
          "Our last stop on the way to the capitol is Charm City, where we will be advocating for a zero emission transportation sector to clean up our air and fight the climate crisis.",
      },
    ],
  };
  const WashingtonDC = {
    stations: [
      {
        title: "Washington, DC",
        description:
          "The culmination of the Route Zero Relay trip across the country, will be at EPA headquarters in DC where we will deliver comments from people all across the country who want the strongest standards possible to put us on the route to Zero Emissions!",
      },
    ],
  };
  return props.state === "Los Angeles, CA" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={LALogo} alt="carddetail" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {LosAngelesCA.stations[0].title}
            </h5>
            <p className="card-text">{LosAngelesCA.stations[0].description}</p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Flagstaff, Arizona" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={LALogo} alt="carddetail" /> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {Flagstaff.stations[0].title}
            </h5>
            <p className="card-text">{Flagstaff.stations[0].description}</p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Santa Fe, NM" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={LALogo} alt="carddetail" /> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {SantaFe.stations[0].title}
            </h5>
            <p className="card-text">{SantaFe.stations[0].description}</p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Kansas City, MO" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={KCLogo} alt="carddetail" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
             <span style={{ color: "orange" }}>
                        {" "}
                        {KansasCityMO.stations[0].title.substring(0, 12) }
                      </span>
                      <span style={{ color: "red" }}>
                        {" "}
                        {KansasCityMO.stations[0].title.substring(13, 15)}
                      </span>
            </h5>
            <p className="card-text">{KansasCityMO.stations[0].description}</p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Joliet, IL" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={KCLogo} alt="carddetail" /> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              <span> {Joliet.stations[0].title}</span>
            </h5>
            <p className="card-text">{KansasCityMO.stations[0].description}</p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Detroit, Michigan" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
        <div
          className="card "
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={DMLogo} alt="carddetail" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {DetroitMichigan.stations[0].title}
            </h5>
            <p className="card-text">
              {DetroitMichigan.stations[0].description}
            </p>
          </div>
        </div>
      }
    </div>
  ) : props.state === "Pittsburgh, Pennsylvania" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      { (
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={PPLogo} alt="carddetail" />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#E89725",fontWeight:"bold"  ,fontSize:"18px" }}>
              {PittsburghPennsylvania.stations[0].title}
            </h5>
            <p className="card-text">{PittsburghPennsylvania.stations[0].description}</p>
            
          </div>
        </div>
      ) 
            }

    </div>
  )
  : props.state === "Baltimore, Maryland" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      { (
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img className="card-img-top" src={PPLogo} alt="carddetail" /> */}
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#E89725",fontWeight:"bold"  ,fontSize:"18px" }}>
              {Baltimore.stations[0].title}
            </h5>
            <p className="card-text">{Baltimore.stations[0].description}</p>
            
          </div>
        </div>
      ) 
            }

    </div>
  )
  : props.state === "Ohio" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        > 
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {Ohio.stations[0].title}
            </h5>
            <p className="card-text">{Ohio.stations[0].description}</p>
             
          </div>
        </div>
      }
    </div>
  ) 
  : props.state === "Washington, DC" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate(-50%, 10px)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "350px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <img className="card-img-top" src={WDLogo} alt="carddetail" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "18px" }}
            >
              {WashingtonDC.stations[0].title}
            </h5>
            <p className="card-text">{WashingtonDC.stations[0].description}</p>
             
          </div>
        </div>
      }
    </div>
  ) : (
    <div></div>
  );
}
