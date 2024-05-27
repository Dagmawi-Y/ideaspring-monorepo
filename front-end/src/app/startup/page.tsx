import Nav from "./nav/page"
import Navigation from "./Navigation/page"
export default function Startup(){
    return(
        <div>
            <Nav/>
            <div style={{marginTop:"85px"}}>
            <Navigation/>
            </div>
        </div>
    )
}