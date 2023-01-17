import {useEffect} from "react";

function NotFoundView() {

    useEffect(() => {
        console.log('not found view rendered')
    })

    return <h1 className="view">NOT FOUND VIEW</h1>
}

export default NotFoundView;