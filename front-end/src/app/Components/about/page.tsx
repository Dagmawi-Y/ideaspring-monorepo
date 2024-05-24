 import Navbar from "../../Investor/NavBar/page";
import "./style.css"
export default function Aboutus() {
    return (
      <>
      <Navbar/>
        <div className="wrapper">
          <div className="background-container">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
          </div>
          <div className="about-container">
            <div className="image-container">
              <img src="/about.jpg" alt="" />
            </div>
  
            <div className="text-container">
              <h1>About us</h1>
              <p>
              CoGrow is a portal with a mission to provide ecosystem focused, and innovative financing service through motivated team and state of the art technology.<br></br>

In Ethiopia, the labor market has heavily relied on the government expenditure and wage employment. Consequently, identifying and co-implementing alternative, innovative, financing mechanisms is one of the ways the FDRE Jobs Creation Commission is employing efforts in order to support the private sector development.<br></br>

Few of the innovative financing mechanisms to the labor market include increasing awareness and promotion of angel investment, creating a conducive enabling environment for crowdsourcing companies, and developing model of the public guarantee scheme for the Ethiopian context.<br></br>


              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  