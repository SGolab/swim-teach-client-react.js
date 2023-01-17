import {useEffect, useState} from "react";
import NavItem from "./NavItem";
import {useNavigate} from "react-router-dom";

function NavMenu() {

    const [activeItem, setActiveItem] = useState();
    const navigate = useNavigate();

    const disableOtherNavItems = (currentItem) => {
        if (activeItem === currentItem) {
            setActiveItem()
        } else {
            setActiveItem(currentItem)
        }
    }

    const handleClickSkillTree = () => {
        navigate('/skillTree')
        disableOtherNavItems('skillTree');
    };

    const handleClickLessonHistory = () => {
        navigate('/lessonHistory')
        disableOtherNavItems('lessonHistory');
    };

    const handleClickOptions = () => {
        navigate('/options')
        disableOtherNavItems('options')
    }

    return (
        <div className='nav-menu'>
            <NavItem text='SKILL TREE' onClick={handleClickSkillTree} isActive={activeItem && activeItem === 'skillTree'}/>
            <NavItem text='LESSON HISTORY' onClick={handleClickLessonHistory} isActive={activeItem && activeItem === 'lessonHistory'}/>
            <NavItem text='OPTIONS' onClick={handleClickOptions} isActive={activeItem && activeItem === 'options'}/>
        </div>
    )
}

export default NavMenu;