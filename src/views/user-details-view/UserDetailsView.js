import {useEffect, useState} from "react";
import {fetchUserDetails} from "../../DataFetching";

function UserDetailsView() {

    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchUserDetails()
            );

            setData(json)
        }
        dataFetch()
    }, [])


    return (
        <div>{JSON.stringify(data, null, 5)}</div>
    )
}

export default UserDetailsView;