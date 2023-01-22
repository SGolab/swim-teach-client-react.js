function PathItem({value, setValue}) {
    return (
        <div className='path-item' onClick={setValue}>
            <span> > {value?.title}</span>
        </div>)
}

export default PathItem;