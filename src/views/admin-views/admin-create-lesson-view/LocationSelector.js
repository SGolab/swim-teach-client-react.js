import styles from './LocationSelector.module.css'

function LocationSelector({locations, setLocation, handleClose}) {
    return (
        <div className={styles.locationSelector}>

            <div className={styles.exitBtn} onClick={handleClose}>
                <img src={'/exit.png'}/>
            </div>

            <div className={styles.itemSelect}>
                {locations.map(location =>
                    <div className={styles.item} onClick={() => {setLocation(location); handleClose()}}>
                        {location}
                    </div>)
                }
            </div>

        </div>
    )
}

export default LocationSelector;