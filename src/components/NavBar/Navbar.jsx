import { NavBarStyled } from "./Navbar.styles";
import logoescrita from "../../images/TrackIt.png"
import logotipoNavBar from "../../images/logotipoNavbar.png"

export default function NavBar(){
    return(
    <NavBarStyled>
        <img className = "logoescrita" src = {logoescrita} /> <img  className = "logotipoNavBar" src = {logotipoNavBar} />
    </NavBarStyled>
    )
}