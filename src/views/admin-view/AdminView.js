import './AdminView.css'
import AdminTable from "./AdminTable";
import useFetch from "../../useFetch";

function AdminView() {

    const [data] = useFetch(`/swimmers`)

    return (
        <div className='view'>
            {data ? <AdminTable swimmers={data}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default AdminView;