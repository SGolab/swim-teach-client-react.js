import './LoginView.css'
import {fetchPostLogin} from "../../DataFetching";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

function LoginView() {

    const loginInput = useRef()
    const passwordInput = useRef()
    const navigate = useNavigate();

    function handleLogIn() {

        const loginData = {
            'username': loginInput.current.value,
            'password': passwordInput.current.value
        }

        fetchPostLogin(loginData)
            .then(response => {

                if (response.status === 401) {
                    alert("Wrong credentials! Try once again.")
                    return
                }

                if (response.ok) {
                    let token;
                    let user;

                    for (let [headerName, headerValue] of response.headers.entries()) {

                        if (headerName === 'authorization') {
                            token = headerValue
                        }
                        if (headerName === 'user') {
                            user = headerValue
                        }
                    }

                    if (token) {
                        localStorage.setItem('jwtToken', token)
                        localStorage.setItem('user', user)
                        navigate('/')
                    }
                }
            })

    }

    return (
        <div className='view'>
            <div className='login-container'>
                <input ref={loginInput} type='text' placeholder='username'/>
                <input ref={passwordInput} type='password' placeholder='password'/>
                <button className='login-button' onClick={handleLogIn}>LOG IN</button>
            </div>
        </div>
    )
}

export default LoginView;