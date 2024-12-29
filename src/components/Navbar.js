import "./NavbarStyle.css";
import { Component } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        clicked: false,
        isLandscape: false,
        isSmallScreen: false,
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleOrientationChange = () => {
        const isLandscape = window.matchMedia("(orientation: landscape)").matches;
        const isSmallScreen = window.innerWidth < 900;
        this.setState({ isLandscape, isSmallScreen });
    };

    componentDidMount() {
        this.handleOrientationChange(); // Check on initial load
        window.addEventListener("orientationchange", this.handleOrientationChange);
        window.addEventListener("resize", this.handleOrientationChange); // Handle window resize
    }

    componentWillUnmount() {
        window.removeEventListener("orientationchange", this.handleOrientationChange);
        window.removeEventListener("resize", this.handleOrientationChange); // Remove resize listener
    }

    render() {
        if (this.state.isLandscape && this.state.isSmallScreen) {
            return (
                <div className="landscape-warning">
                    <p>Please rotate your device to portrait mode for the best experience.</p>
                </div>
            );
        }

        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">PenangTravel.</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    className={item.cName}
                                    to={item.url}
                                    onClick={() => this.setState({ clicked: false })}
                                >
                                    <i className={item.icons}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
