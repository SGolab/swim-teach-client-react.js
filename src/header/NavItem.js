function NavItem({text, onClick, isActive}) {

    return (
        <div className={'nav-item' + (isActive ? ' active' : '')} onClick={onClick}>
            <span>{text}</span>
        </div>
    )
}

export default NavItem;