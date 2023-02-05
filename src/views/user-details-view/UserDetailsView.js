import useFetch from "../../useFetch";

function UserDetailsView() {

    const [data] = useFetch(`/userDetails`)

    return (
        <div>{JSON.stringify(data, null, 5)}</div>
    )
}

export default UserDetailsView;