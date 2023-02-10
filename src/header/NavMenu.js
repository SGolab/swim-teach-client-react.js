import {NavLink, useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import useIsMobile from "../useIsMobile";
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

function MobileNavMenu() {

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
        <>


            <div className='nav-item' onClick={() => setOpened(!opened)}>
                <img src='/menu.png'/>
                <div className='dropdown-menu' style={{display: (opened ? 'flex' : 'none')}}>
                    <div className='dropdown-item' onClick={() => handleRedirection("/skillTree")}>SKILLS</div>
                    <div className='dropdown-item' onClick={() => handleRedirection("/lessonHistory")}>LESSONS</div>
                    <div className='dropdown-item' onClick={() => handleRedirection("/homework")}>HOMEWORK</div>
                    <div className='dropdown-item' onClick={() => handleRedirection('/userDetails')}>USER DETAILS</div>
                    <div className='dropdown-item'>HELP</div>
                    <div className='dropdown-item'>CONTACT</div>
                    <div className='dropdown-item' onClick={handleLogOut}>LOG OUT</div>
                </div>
            </div>
        </>
    )
}

function DesktopNavMenu() {

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
        <>
            <div className='nav-item' onClick={() => handleRedirection("/skillTree")}>SKILLS</div>
            <div className='nav-item' onClick={() => handleRedirection("/lessonHistory")}>LESSONS</div>
            <div className='nav-item' onClick={() => handleRedirection("/homework")}>HOMEWORK</div>
            <div className='nav-item' onClick={() => setOpened(!opened)}>
                <img src='/menu.png'/>
                <div className='dropdown-menu'>
                    <div className='dropdown-item' onClick={() => handleRedirection('/userDetails')}>USER DETAILS</div>
                    <div className='dropdown-item'>HELP</div>
                    <div className='dropdown-item'>CONTACT</div>
                    <div className='dropdown-item' onClick={handleLogOut}>LOG OUT</div>
                </div>
            </div>
        </>
    )
}


export default NavMenu;