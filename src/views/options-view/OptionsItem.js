function OptionsItem({text, action}) {

    return (
        <div className='options-item' onClick={action}>
            <h1>{text}</h1>
        </div>
    )
}

export default OptionsItem;