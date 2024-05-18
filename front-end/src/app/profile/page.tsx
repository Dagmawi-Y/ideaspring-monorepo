import "./style.css"
 export default function profile (){
    return(
        <div  className="body">
        <div className="header">
    <h1>Example Investor Card</h1>
    <p>Your location will be shown like this</p>
  </div>
  <div className="investor-info">
    <p>£1- £1,000,000</p>
    <p>London, UK</p>
  </div>
  <div className="bio">
    <h2>Legal and Risk Consultant</h2>
    <p>Acting on behalf of 2 venture capitalists.</p>
    <h3>Areas of Expertise</h3>
    <p>Tech, Mobile, App Development</p>
  </div>
  <button>Start investing</button>
        </div>
    )
 }
