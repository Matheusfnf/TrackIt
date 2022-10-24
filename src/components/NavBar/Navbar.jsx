import { NavBarStyled } from "./Navbar.styles";
import logoescrita from "../../images/TrackIt.png";
import logotipoNavBar from "../../images/logotipoNavbar.png";
import { parseCookies } from "nookies";

export default function NavBar() {
  const { "userauth.image": image } = parseCookies();

  return (
    <NavBarStyled>
      <img className="logoescrita" src={logoescrita} />{" "}
      <img className="logotipoNavBar" src={image} />
    </NavBarStyled>
  );
}
