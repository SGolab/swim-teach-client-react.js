import {useNavigate} from "react-router-dom";

function useLogOut() {

    const navigate = useNavigate();

    const handleLogOut = function () {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('user')
        navigate('/login')
    }

    return handleLogOut;
}

export default useLogOut;