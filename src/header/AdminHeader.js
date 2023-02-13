import './Header.css'
import {useNavigate} from "react-router-dom";
import AdminNavMenu from "./AdminNavMenu";

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
            <div className='title-container' onClick={() => navigate('/admin')}>
                <img src='/main-logo.png'/>
                BOMBEL ACADEMY
            </div>
            <AdminNavMenu/>
        </div>
    )
}

export default AdminHeader;