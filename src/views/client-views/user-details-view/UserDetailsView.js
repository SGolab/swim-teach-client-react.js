import useFetch from "../../../hooks/useFetch";
import styles from './UserDetailsView.module.css'
import UserDetailsTable from "../../shared-components/user-details-table/UserDetailsTable";

function UserDetailsView() {

    const [userDetails] = useFetch(`/userDetails`)

    return (
        <div className={'view'}>
            {userDetails && <UserDetailsTable userDetails={userDetails}/>}
        </div>
    )
}

export default UserDetailsView;