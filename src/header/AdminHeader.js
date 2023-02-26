import './Header.css'
import {useNavigate} from "react-router-dom";
import AdminNavMenu from "./AdminNavMenu";

function AdminHeader() {

    const navigate = useNavigate();

    return (
        <div className='header'>

            <div className='title-container' onClick={() => navigate('/admin')}>
                <img src='/main-logo.png'/>
                <div>BOMBEL ACADEMY</div>
                <div style={{fontSize: '1rem', whiteSpace: 'nowrap'}}>--admin--</div>
            </div>

            <AdminNavMenu/>

        </div>
    )
}

export default AdminHeader;