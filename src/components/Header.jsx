import { Link } from "react-router-dom";
import logoSpofify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
        <img src={logoSpofify} alt="Logo do Spotify"/>

        <Link to="/" className="header__link" >
            <h1>Spotify</h1>
        </Link>
    </div>
  )
}

export default Header