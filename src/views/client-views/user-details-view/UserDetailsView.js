import useFetch from "../../../hooks/useFetch";
import styles from './UserDetailsView.module.css'
import UserDetailsTable from "../../shared-components/user-details-table/UserDetailsTable";
import {useNavigate} from "react-router-dom";

function UserDetailsView() {

    const [userDetails] = useFetch(`/userDetails`)

    const navigate = useNavigate();

    return (
        <div className={'view'}>
            <div className={styles.contentContainer}>
                {userDetails && <UserDetailsTable userDetails={userDetails}/>}
                <button onClick={() => navigate('/changePassword')}>CHANGE PASSWORD</button>
            </div>
        </div>
    )
}

export default UserDetailsView;