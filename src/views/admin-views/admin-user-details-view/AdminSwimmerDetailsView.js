import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import UserDetailsTable from "../../shared-components/user-details-table/UserDetailsTable";
import {useEffect} from "react";

function AdminSwimmerDetailsView() {

    const {swimmerId} = useParams()

    const [userDetails] = useFetch(`/swimmers/${swimmerId}/details`)

    useEffect(() => console.log(userDetails), [userDetails])

    return (
        <div className={'view'}>
            {userDetails && <UserDetailsTable userDetails={userDetails}/>}
        </div>
    )

}

export default AdminSwimmerDetailsView;