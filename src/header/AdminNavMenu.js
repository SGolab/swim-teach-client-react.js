import {useNavigate} from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import {useState} from "react";

function AdminNavMenu() {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false)

    function handleRedirection(url) {
        setOpened(false)
        navigate(url)
    }

    function handleLogOut() {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div className='nav-menu'>
            <div className='nav-item' onClick={() => setOpened(!opened)}>
                <img src='/menu.png'/>

                {opened &&
                    <div className='dropdown-menu'>
                        <div className='dropdown-item' onClick={() => handleRedirection('userDetails')}>USER DETAILS</div>
                        <div className='dropdown-item'>HELP</div>
                        <div className='dropdown-item'>CONTACT</div>
                        <div className='dropdown-item' onClick={handleLogOut}>LOG OUT</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminNavMenu;