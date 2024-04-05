import { NavLink } from "react-router-dom"
import "./css/HeaderCSS.css"
import { useState } from "react"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <header className="header" >
                <NavLink to='/' id="logo">
                    Alexander Christianson <span>Portfolio</span>
                </NavLink>
                <nav>
                    <input type="checkbox" id="nav_button" />
                    <ul className="menu">
                        <li>
                            <NavLink to='/' className="link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cv' className="link">
                                CV
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className="link">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className="link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="ham-menu" onClick={toggleOpenMenu}>
                    <label htmlFor="nav_button">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                </div>
            </header>
        </>
    )
}