import './Header.css'
import Title from "./Title";
import NavMenu from "./NavMenu";
import NavItem from "./NavItem";

function Header() {
    return (
    <div className='header'>
        <Title text='SWIM TEACH APP'/>
        <NavMenu/>
    </div>
    )
}

export default Header;