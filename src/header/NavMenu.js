import {NavLink, useNavigate} from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import {useState} from "react";

function NavMenu() {

    const isMobile = useIsMobile();

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
            {!isMobile &&
                <>
                    <NavLink className='nav-item' to='/skillTree' onClick={() => setOpened(false)}>SKILLS</NavLink>
                    <NavLink className='nav-item' to='/lessonHistory' onClick={() => setOpened(false)}>LESSONS</NavLink>
                    <NavLink className='nav-item' to='/homework' onClick={() => setOpened(false)}>HOMEWORK</NavLink>
                </>
            }

            <div className='nav-item' onClick={() => setOpened(!opened)}>
                <img src='/menu.png'/>

                {opened &&
                    <div className='dropdown-menu'>
                        {isMobile &&
                            <>
                                <div className='dropdown-item' onClick={() => handleRedirection("/skillTree")}>SKILLS</div>
                                <div className='dropdown-item' onClick={() => handleRedirection("/lessonHistory")}>LESSONS</div>
                                <div className='dropdown-item' onClick={() => handleRedirection("/homework")}>HOMEWORK</div>
                            </>
                        }
                        <div className='dropdown-item' onClick={() => handleRedirection('/userDetails')}>USER DETAILS</div>
                        <div className='dropdown-item'>HELP</div>
                        <div className='dropdown-item'>CONTACT</div>
                        <div className='dropdown-item' onClick={handleLogOut}>LOG OUT</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavMenu;