import './Header.css'
import NavMenu from "./NavMenu";
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();

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

export default Header;