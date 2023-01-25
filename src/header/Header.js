import './Header.css'
import NavMenu from "./NavMenu";
import {NavLink} from "react-router-dom";

function Header() {
    return (
    <div className='header'>
        <NavLink className='title' to='/'>SWIM TEACH APP</NavLink>
        <NavMenu/>
    </div>
    )
}

export default Header;