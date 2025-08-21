import "./NavbarStyles.css";
import pomipomiLogo from "../../assets/images/Pomipomi.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={pomipomiLogo} alt="Pomipomi Logo" />
            <button>Login</button>
        </nav>
    );
}

export default Navbar;
