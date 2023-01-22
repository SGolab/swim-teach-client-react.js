import {NavLink} from "react-router-dom";

function NavMenu() {

    return (
        <div className='nav-menu'>
            <NavLink className='nav-link' to="/skillTree">SKILL TREE</NavLink>
            <NavLink className='nav-link' to="/lessonHistory">LESSON HISTORY</NavLink>
            <NavLink className='nav-link' to="/options">OPTIONS</NavLink>
        </div>
    )
}

export default NavMenu;