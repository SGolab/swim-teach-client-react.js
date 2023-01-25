import './Header.css'
import NavMenu from "./NavMenu";
import {NavLink, useNavigate} from "react-router-dom";

function AdminHeader() {

    const navigate = useNavigate();

    function handleUserDetails() {
        //todo
    }

    function handleLogOut() {
        localStorage.removeItem('jwtToken')
        navigate('/login')
    }

    return (
        <div className='header'>
            <NavLink className='title' to='/admin'>SWIM TEACH APP</NavLink>
            <h2>--ADMIN VIEW--</h2>

            <div className='nav-menu'>
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
        </div>
    )
}

export default AdminHeader;