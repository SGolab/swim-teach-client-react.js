import {NavLink, useNavigate} from "react-router-dom";

function NavMenu() {

    const navigate = useNavigate();

    function handleUserDetails() {
        //todo
    }

    function handleLogOut() {
        localStorage.removeItem('jwtToken')
        navigate('/login')
    }

    return (
        <div className='nav-menu'>
            <NavLink className='nav-item' to="/skillTree">SKILL TREE</NavLink>
            <NavLink className='nav-item' to="/lessonHistory">LESSON HISTORY</NavLink>
            <div className='nav-item'>
                <span>OPTIONS</span>
                <div className='dropdown-menu'>
                    <div className='dropdown-item' onClick={handleUserDetails}>USER DETAILS</div>
                    <div className='dropdown-item'>HELP</div>
                    <div className='dropdown-item'>CONTACT</div>
                    <div className='dropdown-item' onClick={handleLogOut}>LOG OUT</div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;