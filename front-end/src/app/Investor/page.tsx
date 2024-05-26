import Nav from "../nav/page"
import Navigation from "./Navigation/page"
export default function Startup(){
    return(
        <div>
            <div style={{marginBottom: "90px",}}>
            <Nav/>
            </div>
            <Navigation/>
        </div>
    )
}