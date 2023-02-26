import styles from './UserDetailsTable.module.css'

function UserDetailsTable({userDetails}) {
    return (
        <div className={styles.userDetailsTable}>
            {userDetails &&
                <div className={styles.keyColumn}>
                    {Object.keys(userDetails).map(key => <span>{key}</span>)}
                </div>
            }

            {userDetails &&
                <div className={styles.valueColumn}>
                    {Object.values(userDetails).map(value => <span>{value}</span>)}
                </div>
            }
        </div>
    )
}

export default UserDetailsTable;