import {useEffect} from "react";

function LoginView() {

    useEffect(() => {
        console.log('login view rendered')
    })

    return <h1 className="view">LOGIN VIEW</h1>
}

export default LoginView;