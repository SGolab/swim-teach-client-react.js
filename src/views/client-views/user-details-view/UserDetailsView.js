import useFetch from "../../../hooks/useFetch";
import styles from './UserDetailsView.module.css'

function UserDetailsView() {

    const [data] = useFetch(`/userDetails`)

    return (
        <div className={styles.contentContainer}>


            {data && <div className={styles.keyColumn}>
                {Object.keys(data).map(key => <span>{key}</span>)}
            </div>}

            {data && <div className={styles.valueColumn}>
                {Object.values(data).map(value => <span>{value}</span>)}
            </div>}
        </div>
    )
}

export default UserDetailsView;