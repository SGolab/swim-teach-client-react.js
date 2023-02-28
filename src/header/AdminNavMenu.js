import {useNavigate} from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import {useState} from "react";
import useLogOut from "../hooks/useLogOut";

function AdminNavMenu() {

    const logout = useLogOut();

    const navigate = useNavigate();

    const [opened, setOpened] = useState(false)

    function handleRedirection(url) {
        setOpened(false)
        navigate(url)
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
                        <div className='dropdown-item' onClick={logout}>LOG OUT</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminNavMenu;