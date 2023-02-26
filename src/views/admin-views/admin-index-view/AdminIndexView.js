import useFetch from "../../../hooks/useFetch";
import SwimmerList from "./SwimmerList";
import {useNavigate} from "react-router-dom";

function AdminIndexView() {

    const [data] = useFetch(`/swimmers`)

    const navigate = useNavigate()

    return (
        <div className='view'>
            {data ? <SwimmerList swimmers={data} redirectAddSwimmer={() => navigate('swimmers/new')}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default AdminIndexView;