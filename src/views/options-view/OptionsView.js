import {useEffect} from "react";
import OptionsContainer from "./OptionsContainer";
import OptionsItem from "./OptionsItem";
import "./OptionsView.css";
import {useNavigate} from "react-router-dom";

function OptionsView() {

    const navigate = useNavigate()

    useEffect(() => {
        console.log('options view rendered')
    })

    const logOut = () => {
        navigate('/login')
    }

    return (
        <div className="view">
            <OptionsContainer>
                <OptionsItem text="USER DETAILS"/>
                <OptionsItem text="LOG OUT" action={logOut}/>
            </OptionsContainer>
        </div>
    )
}

export default OptionsView;