import "./style.css"
export default function title(){
    return(
        <div style={{marginLeft: "15rem",alignItems:"center"}}>
        <h1 style={{textAlign:"center"}}>Bussiness Proposals</h1>
        <p>Our platform offers a wide range of investment opportunities in Ethiopia, from early-stage startups seeking seed funding to established companies in need of expansion capital. You can refine your search by criteria like market, region, and industry, ensuring a personalized selection that aligns with your goals, whether it's quirky dining establishments or tech firms.
        </p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <p>50 members are found</p>
            <div style={{display:"flex"}}>
            <p style={{marginLeft: "-20px",}}>Displayed by latest </p>
            {/* <button>latest</button> */}
            </div>
        </div>
        </div>
    )
}