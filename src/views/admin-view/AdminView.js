import './AdminView.css'
import AdminTable from "./AdminTable";
import {useEffect, useState} from "react";
import {fetchSwimmers} from "../../DataFetching";

function AdminView() {

    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchSwimmers()
            );

            setData(json)
        }
        dataFetch()
    }, [])

    return (
        <div className='view'>
            {data ? <AdminTable swimmers={data}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default AdminView;