import useFetch from "../../../hooks/useFetch";
import SwimmerList from "./SwimmerList";

function AdminIndexView() {

    const [data] = useFetch(`/swimmers`)

    return (
        <div className='view'>
            {data ? <SwimmerList swimmers={data}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default AdminIndexView;