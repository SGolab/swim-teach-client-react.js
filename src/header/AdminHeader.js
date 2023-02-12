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
            <div className='title-container' onClick={() => navigate('/')}>
                <img src='/main-logo.png'/>
                BOMBEL ACADEMY
            </div>
            <NavMenu/>
        </div>
    )
}

export default AdminHeader;